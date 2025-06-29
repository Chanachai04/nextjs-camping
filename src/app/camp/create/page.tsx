import { createLandmarkAction } from "@/actions/action";
import { SubmitButton } from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ProvinceInput from "@/components/form/ProvinceInputs";
import TextAreaInput from "@/components/form/TextAreaInput";

const CreateLandmark = async () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Landmark</h1>
      <div className="border p-4 rounded-2xl">
        <FormContainer action={createLandmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput label="Landmark Name" name="name" type="text" placeholder="Enter your landmark name" />
            <CategoryInput />
            <div className="md:col-span-2">
              <TextAreaInput name="description" />
            </div>
            <FormInput label="Price" name="price" type="number" placeholder="Enter the price" />
            <ProvinceInput />
            <SubmitButton className="md:col-span-2" text="create landmark" size="lg" />
          </div>
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateLandmark;
