import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signin (){
        return {msg:"Hello singin"}
    }
    signup(){
        return {msg:"Hello singup"}
    }
}