'use client'

import React from 'react'
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'

const formSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters!" }).max(50),
    email: z.string().email({ message: "Invalid email address!" }),
    phone: z.string().min(10).max(15),
    location: z.string().min(2),
    role: z.enum(["Admin", "User"])
})

export default function EditUser() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "rishav",
            email: "rishav5raj3@gmail.com",
            phone: "+1 234 5678",
            location: "New York, NY",
            role: "Admin"
        },
    });

    const onsubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    };

    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className={'mb-4'}>Edit User</SheetTitle>
                <SheetDescription
                    render={
                    <form onSubmit={form.handleSubmit(onsubmit)}>
                        <FieldGroup>
                            <Controller
                                name='username'
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor='username'>Username</FieldLabel>
                                        <Input
                                            {...field}
                                            id="username"
                                            placeholder='Enter Username'
                                            autoComplete='username'
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <FieldDescription>This is the user&apos;s public username.</FieldDescription>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name='email'
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor='email'>Email address</FieldLabel>
                                        <Input
                                            {...field}
                                            id="email"
                                            type='email'
                                            placeholder='name@example.com'
                                            autoComplete='email'
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <FieldDescription>User for account-realted communication.</FieldDescription>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name='phone'
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor='phone'>Phone number</FieldLabel>
                                        <Input
                                            {...field}
                                            id="phone"
                                            type='tel'
                                            placeholder='+1 234 5678'
                                            autoComplete='tel'
                                            aria-invalid={fieldState.invalid}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name='location'
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor='location'>Location</FieldLabel>
                                        <Input
                                            {...field}
                                            id="location"
                                            placeholder='City, Country'
                                            autoComplete='address-level2'
                                            aria-invalid={fieldState.invalid}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name='role'
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>User role</FieldLabel>
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger
                                                aria-invalid={fieldState.invalid}
                                                className={'w-full'}
                                            >
                                                <SelectValue placeholder="select a role" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                <SelectItem value="admin">Admin</SelectItem>
                                                <SelectItem value="user">User</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <FieldDescription>Only trusted users should receive the admin role.</FieldDescription>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <div className='flex justify-end gap-3 pt-2'>
                                <Button type='button' variant={'outline'} onClick={() => form.reset()}>Reset</Button>
                                <Button type='submit' disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? "Saving..." : "Save changes"}</Button>
                            </div>

                        </FieldGroup>
                    </form>
                    }
                />
            </SheetHeader>
        </SheetContent>
    )
}
