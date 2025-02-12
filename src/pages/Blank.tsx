import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  firstConversation: z.string().min(1, "Please answer this question"),
  firstDate: z.string().min(1, "Please answer this question"),
  indoreMall: z.string().min(1, "Please answer this question"),
  delhiMall: z.string().min(1, "Please answer this question"),
  firstKiss: z.string().min(1, "Please answer this question"),
  loveAnswer: z.enum(["Yes", "Yes ", "HELL YES"]),
  marriageAnswer: z.enum(["Yes", "Yes ", "HELL YES"]),
});

const Blank = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstConversation: "",
      firstDate: "",
      indoreMall: "",
      delhiMall: "",
      firstKiss: "",
      loveAnswer: undefined,
      marriageAnswer: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase
        .from('quiz_answers')
        .insert([
          {
            first_conversation: values.firstConversation,
            first_date: values.firstDate,
            indore_mall: values.indoreMall,
            delhi_mall: values.delhiMall,
            first_kiss: values.firstKiss,
            love_answer: values.loveAnswer,
            marriage_answer: values.marriageAnswer,
          }
        ])
        .select();

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your answers have been saved ❤️",
      });

      // Navigate to the messages page after successful submission
      navigate('/messages');
      
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "There was a problem saving your answers. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-2xl"
      >
        <h1 className="text-4xl font-playfair font-bold text-center mb-12 text-gradient">
          A few Questions and Answers (hehe)
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstConversation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium">
                    1. What was our first ever conversation?
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Type your answer here..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="firstDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium">
                    2. Where did we go out for the first time ever?
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Type your answer here..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="indoreMall"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium">
                    3. What was the name of that mall in Indore?
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Type your answer here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="delhiMall"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium">
                    4. What was the name of the mall in Delhi?
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Type your answer here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="firstKiss"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium">
                    5. Remember our first kiss? Where was it?
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Type your answer here..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="loveAnswer"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-lg font-medium">
                    6. Do you love me?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Yes" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Yes
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Yes " />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Yes
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="HELL YES" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          HELL YES
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="marriageAnswer"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-lg font-medium">
                    7. Will you marry me?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Yes" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Yes
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Yes " />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Yes
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="HELL YES" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          HELL YES
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center pt-6">
              <Button 
                type="submit"
                className="bg-rose-500 hover:bg-rose-600 text-white px-8"
              >
                Submit Answers
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default Blank;
