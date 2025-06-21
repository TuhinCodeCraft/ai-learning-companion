"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";
import { createCompanion } from "@/lib/actions/companion.actions";
import { redirect } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, { message: "Companion is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  topic: z.string().min(1, { message: "Topic is required" }),
  voice: z.string().min(1, { message: "Voice is required" }),
  style: z.string().min(1, { message: "Style is required" }),
  duration: z.coerce.number().min(1, { message: "Duration is required" }),
});

const CompanionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 5,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const companion = await createCompanion(values);
      if (companion) {
        redirect(`/companions/${companion.id}`);
      } else {
        console.error("Failed to create companion");
        redirect("/");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-4xl flex flex-col m-auto gap-5">
      <h1 className="items-center flex justify-center">Companion Builder</h1>
      {/* Image Section - Single Responsive Image with Full Height Match */}
      <div className="flex gap-2">
        <div className="lg:w-1/2 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/formimage.jpeg"
              alt="AI Companion"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </motion.div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-2xl font-bold text-gray-800">
              Create Your AI Companion
            </h1>
            <p className="text-gray-500 mt-2">
              Customize your perfect learning assistant in just a few steps
            </p>
          </motion.div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Companion Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Professor Calculus"
                          {...field}
                          className="mt-1 hover:border-blue-300 focus:border-blue-500 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <SelectTrigger className="mt-1 hover:border-blue-300 focus:border-blue-500 transition-colors">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem
                                value={subject}
                                key={subject}
                                className="hover:bg-blue-50"
                              >
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Learning Topic
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g. Derivatives & Integrals, World War II, Shakespearean Sonnets"
                          {...field}
                          className="mt-1 hover:border-blue-300 focus:border-blue-500 transition-colors min-h-[100px]"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Voice Style
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          >
                            <SelectTrigger className="mt-1 hover:border-blue-300 focus:border-blue-500 transition-colors">
                              <SelectValue placeholder="Select voice" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Communication Style
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          >
                            <SelectTrigger className="mt-1 hover:border-blue-300 focus:border-blue-500 transition-colors">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="formal">Formal</SelectItem>
                              <SelectItem value="casual">Casual</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Session Duration (minutes)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="15"
                          {...field}
                          className="mt-1 hover:border-blue-300 focus:border-blue-500 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="pt-2"
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg shadow hover:shadow-md transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Build Your AI Companion"
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CompanionForm;
