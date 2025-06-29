import { createProfileAction } from "@/actions/action";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfile = async () => {
  const user = await currentUser();
  if (user?.privateMetadata.hasProfile) redirect("/");
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-4 rounded-2xl">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput label="First Name" name="firstName" type="text" placeholder="Enter your first name" />
            <FormInput label="Last Name" name="lastName" type="text" placeholder="Enter your last name" />
            <FormInput label="User Name" name="userName" type="text" placeholder="Enter your user name" />
          </div>
          <SubmitButton text="create profile" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
