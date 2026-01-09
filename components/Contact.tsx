"use client";
import { Button, Flex, Form, Input, message } from "antd";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { motion } from "framer-motion";

type FormValues = {
  name: string;
  email: string;
  message: string;
};
const Contact: React.FC = () => {
  const t = useTranslations("HomePage.contact");
  const { TextArea } = Input;
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<FormValues>();
  const handleSubmit = async (values: FormValues) => {
    setLoading(true);
    console.log("values", values);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success(t("success") || "Message sent successfully!");
        form.resetFields();
      } else {
        message.error(t("fail") || "Failed to send message");
      }
    } catch {
      message.error(t("fail") || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="my-30 scroll-mt-16" id="contact">
      <div className="font-bold text-center text-4xl tracking-wide leading-tight">
        {t("title")}
      </div>

      <motion.div
        className="my-20 p-10 mx-30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.3 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
      >        <p className="italic font-semibold text-center mb-10 ">
          {t("message")}
        </p>
        <Form<FormValues> onFinish={handleSubmit} layout="vertical" form={form}>
          <Flex vertical gap={30} className="flex   ">
            <Form.Item
              name="name"
              rules={[{ required: true, message: t("fields.name.required") }]}
            >
              <Input
                placeholder="Name"
                variant="underlined"
                type="text"
                required
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: t("fields.email.required") },
                { type: "email", message: t("fields.email.invalid") },
              ]}
            >
              <Input
                placeholder="Email"
                variant="underlined"
                type="email"
                required
              />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[
                { required: true, message: t("fields.message.required") },
              ]}
            >
              <TextArea
                showCount
                placeholder="Message"
                variant="underlined"
                autoSize={{
                  minRows: 5,
                  maxRows: 10,
                }}
                required
              />
            </Form.Item>

            <div className="flex justify-center">
              <Button
                loading={loading}
                htmlType="submit"
                className="
                  font-semibold! text-white! text-lg!  
                  px-10! py-6!
                  my-5
                  w-fit
                  bg-linear-to-r!
                  from-purple-400!
                  to-purple-700!
                  hover:brightness-125
                  hover:shadow-[0_0_40px_rgba(168,85,247,0.8)]! 
                  transition-all duration-300
                "
                size="middle"
              >
                Send Message
              </Button>
            </div>
          </Flex>
        </Form>
      </motion.div>
    </div>
  );
};

export default Contact;
