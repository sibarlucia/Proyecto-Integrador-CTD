package com.example.digitalbooking.exceptionHandlers;

public class BadRequestException extends Exception {
    public BadRequestException(String message) {
        super(message);
    }
}
