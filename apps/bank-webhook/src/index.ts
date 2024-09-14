import express from "express";
import prisma from "@repo/db/client";
const app = express();
app.post("/hdfcWebhook",async (req, res) => {
    
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    if(!paymentInformation.amount || !paymentInformation.token || !paymentInformation.userId){
        return res.status(400).json({
            msg : 'the Cred is Not Provided Correctly !'
        })
    }

    try {
        await prisma.$transaction([
            prisma.balance.update({
                where:{
                    userId : paymentInformation.userId
                },
                data:{
                    amount:{
                        increment : paymentInformation.amount
                    }
                }
            }),
            prisma.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            })
        ]);
        return res.json({
            message: "Captured"
        })
    } catch (error) {
        console.error(error);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }
    
})