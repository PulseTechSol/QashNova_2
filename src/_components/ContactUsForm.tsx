"use client";
import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/material";
import CustomInputField from "./CustomInputField";
import ButtonComponent from "./ButtonComponent";
import svgs from "@/_assets/svgs";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUsForm() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  async function onSubmit(data: unknown) {
    console.log("Form Data: ", data);
    try {
      const response = await axios.post("/api/contactus", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response?.status === 200) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Submission failed! Please try again.");
      }
      reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Submission failed! Please try again.");
      // console.log("Message error", err);
    } finally {
      // setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "18px", md: "25px" },
        }}
      >
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <CustomInputField
              {...field}
              label="Name"
              inputType="text"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone Number is required",
            pattern: {
              value: /^\+?[0-9]+$/,
              message: "Phone number must be numeric",
            },
          }}
          render={({ field }) => (
            <CustomInputField
              {...field}
              label="Phone"
              inputType="tel"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          }}
          render={({ field }) => (
            <CustomInputField
              {...field}
              label="Email"
              inputType="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          rules={{
            required: "Message is required",
            minLength: {
              value: 50,
              message: "Message must be at least 50 characters long",
            },
          }}
          render={({ field }) => (
            <CustomInputField
              {...field}
              label="Message"
              inputType="text"
              error={!!errors.message}
              helperText={errors.message?.message}
              multiline={true}
              rows={4}
            />
          )}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: { xs: "20px", md: "40px" },
        }}
      >
        <ButtonComponent
          type="submit"
          label="Submit"
          imgSrc={svgs.whiteArrow}
          sx={{
            background: { xs: "#3C65FF", md: "#3C65FF" },
            color: { xs: "#fff" },
            borderRadius: "50px",
            border: "2px solid #3C65FF",
            maxWidth: "280px",
          }}
        />
      </Box>
    </form>
  );
}
