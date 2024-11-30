'use server'

import { getUser } from "@/lib/auth";
import { schemaShippingAddress } from "@/lib/schema";
import { ActionResult, TCart } from "@/types";
import { redirect } from "next/navigation";
import prisma from "../../../../../../lib/prisma";
import { generateRandomString } from "@/lib/utils";
import { PaymentRequestParameters, PaymentRequest } from "xendit-node/payment_request/models";
import xenditClient from "@/lib/xendit";

export default async function storeOrder(
    _: unknown,
    formData: FormData,
    total: number,
    products: TCart[]
): Promise<ActionResult> {
    
    const {session, user} = await getUser()
    if (!session) {
        return redirect('/')
    }

    const parse = schemaShippingAddress.safeParse({
        name: formData.get('name'),
        address: formData.get('address'),
        city: formData.get('city'),
        postal_code: formData.get('postal_code'),
        notes: formData.get('notes'),
    })

    if (!parse.success) {
        return {
            error: parse.error.errors[0].message
        }
    }



    try {
        const order = await prisma?.order.create({
            data: {
                total: total,
                status: 'pending',
                user_id: user.id,
                code: generateRandomString(15)
            }
        })



        const data: PaymentRequestParameters = {
            amount: total,
            paymentMethod: {
                ewallet: {
                    channelProperties: {
                        successReturnUrl: process.env.NEXT_PUBLIC_REDIRECT_URL
                    },
                    channelCode: 'SHOPEEPAY'
                },
                reusability: 'ONE_TIME_USE',
                type: 'EWALLET'
            },
            currency: 'IDR',
            referenceId: order?.code
        } 

        const response: PaymentRequest = await xenditClient.PaymentRequest.createPaymentRequest({
            data
        })
        
        console.log(response) 
        
    } catch (error) {
        console.log(error);
        return {
            error: 'Failed to checkout'
        }
    }

    return redirect('/carts')
}