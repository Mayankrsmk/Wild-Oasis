import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";

import { useCreateGuest } from "./useCreateGuest";

function CreateGuestForm({ onCloseModal }) {
  const { isCreating, guest } = useCreateGuest();

  const { register, handleSubmit,formState } = useForm();
  const { errors } = formState;
  const isWorking = isCreating;

  async function onSubmit(data) {
    await guest(data);
    onCloseModal();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" disabled={isWorking} {...register("fullName",{required:"This field is required"})} />
      </FormRow>
      <FormRow label="Email" error={errors?.email?.message}>
        <Input type="email" id="email" disabled={isWorking} {...register("email",{required:"This field is required"})} />
      </FormRow>
      <FormRow label="National ID" error={errors?.nationalID?.message}>
        <Input type="text" id="nationalID" disabled={isWorking} {...register("nationalID",{required:"This field is required"})} />
      </FormRow>
      <FormRow label="Nationality" error={errors?.nationality?.message}>
        <Input type="text" id="nationality" disabled={isWorking} {...register("nationality",{required:"This field is required"})} />
      </FormRow>
      <FormRow label="Country flag">
        <Input type="text" id="countryFlag" disabled={isWorking} {...register("countryFlag")} />
      </FormRow>
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button type="primary" disabled={isWorking}>
          Create new guest
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateGuestForm;
