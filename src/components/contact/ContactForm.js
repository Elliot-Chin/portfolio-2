// components/contact/ContactForm.js
import { Button, Input, Textarea, Spinner } from "@nextui-org/react"
import { MAX_MESSAGE, MIN_NAME } from "@/utils/contactConstants"

/**
 * Reusable Contact Form
 * Exactly the same structure and validation UI as before.
 */
export function ContactForm({
    formRef,
    onSubmit,
    onHpChange,
    draft,
    setDraft,
    nameInvalid,
    emailInvalid,
    msgTooLong,
    messageBlank,
    charsLeftNode,      // React node for the char counter row
    buttonProps,        // { size?, resetLabel, isDisabled, sending, remaining, onReset }
    fieldProps,         // { namePlaceholder, msgMinRows, inputSize? }
    formGapClass        // e.g., "gap-4"
}) {
    return (
        <form ref={formRef} onSubmit={onSubmit} noValidate className={`flex flex-col ${formGapClass}`}>
            {/* Honeypot anti-bot field */}
            <input
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                name="company"
                onChange={onHpChange}
            />

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Name */}
                <Input
                    variant="faded"
                    isRequired
                    name="name"
                    label="Your name"
                    placeholder={fieldProps.namePlaceholder}
                    autoComplete="off"
                    value={draft.name}
                    onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                    isInvalid={!!nameInvalid}
                    errorMessage={nameInvalid ? `At least ${MIN_NAME} characters` : ""}
                    classNames={{
                        label: "!text-amber-950 font-semibold font-montserrat",
                        input: "!text-amber-800 placeholder:text-amber-800 placeholder:italic",
                        inputWrapper: "bg-white/10 !outline-none !border-none",
                    }}
                    size={fieldProps.inputSize}
                />

                {/* Email */}
                <Input
                    variant="faded"
                    isRequired
                    type="email"
                    name="email"
                    autoComplete="off"
                    label="Email"
                    placeholder="john@dev-email.com"
                    value={draft.email}
                    onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
                    isInvalid={!!emailInvalid}
                    errorMessage={emailInvalid ? "Enter a valid email" : ""}
                    classNames={{
                        label: "!text-amber-950 font-semibold font-montserrat",
                        input: "!text-amber-800 placeholder:text-amber-800 placeholder:italic",
                        inputWrapper: "bg-white/10 !outline-none !border-none",
                    }}
                    size={fieldProps.inputSize}
                />
            </div>

            {/* Message */}
            <Textarea
                variant="faded"
                isRequired
                name="message"
                label="Message"
                minRows={fieldProps.msgMinRows}
                placeholder="Tell me about your project, idea, or role… anything!"
                value={draft.message}
                onChange={(e) => setDraft((d) => ({ ...d, message: e.target.value }))}
                isInvalid={!!(msgTooLong || messageBlank)}
                errorMessage={
                    msgTooLong
                        ? `Limit is ${MAX_MESSAGE} characters`
                        : messageBlank
                            ? "Please enter a message"
                            : ""
                }
                classNames={{
                    label: "!text-amber-950 font-semibold font-montserrat",
                    input: "!text-amber-800 placeholder:text-amber-800 placeholder:italic",
                    inputWrapper: "bg-white/10 !outline-none !border-none",
                }}
                size={fieldProps.inputSize}
            />

            <div className="flex items-center justify-between">{charsLeftNode}</div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
                <Button
                    id="contact-send-btn"
                    type="submit"
                    color="warning"
                    radius="lg"
                    className="font-medium"
                    size={buttonProps.size}
                    isDisabled={buttonProps.isDisabled}
                >
                    {buttonProps.sending ? (
                        <span className="flex items-center gap-2">
                            <Spinner size="sm" /> Sending…
                        </span>
                    ) : buttonProps.remaining ? (
                        `Please wait ${buttonProps.remaining}s`
                    ) : (
                        "Send message"
                    )}
                </Button>

                <Button
                    variant="bordered"
                    color="danger"
                    onPress={buttonProps.onReset}
                    size={buttonProps.size}
                >
                    {buttonProps.resetLabel}
                </Button>
            </div>
        </form>
    )
}
