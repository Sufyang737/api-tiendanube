import { Schema, model, Document } from "mongoose";

export interface ICustomizations extends Document {
  button_text: string;
  button_type: string;
  modal_select_type_button_color: string;
  modal_select_type_button_hover_color: string;
  modal_select_type_text_color: string;
  modal_select_type_text_hover_color: string;
  modal_select_type_clostech_logo: boolean;
  modal_select_type_business_logo: string;
  modal_avatar_button_color: string;
  modal_avatar_button_hover_color: string;
  modal_avatar_text_color: string;
  modal_avatar_text_hover_color: string;
  modal_avatar_clostech_logo: boolean;
  modal_avatar_business_logo: string;
  store_id: number;
}

const customizationsSchema = new Schema<ICustomizations>({
  button_text: {
    type: String,
    required: true,
    default: "Probar prenda",
  },
  button_type: {
    type: String,
    required: true,
    default: "primary",
  },
  modal_select_type_button_color: {
    type: String,
    required: true,
    default: "#000000",
  },
  modal_select_type_button_hover_color: {
    type: String,
    required: true,
    default: "#333333",
  },
  modal_select_type_text_color: {
    type: String,
    required: true,
    default: "#FFFFFF",
  },
  modal_select_type_text_hover_color: {
    type: String,
    required: true,
    default: "#DDDDDD",
  },
  modal_select_type_clostech_logo: {
    type: Boolean,
    required: true,
    default: true,
  },
  modal_select_type_business_logo: {
    type: String,
    required: true,
    default: "",
  },
  modal_avatar_button_color: {
    type: String,
    required: true,
    default: "#000000",
  },
  modal_avatar_button_hover_color: {
    type: String,
    required: true,
    default: "#333333",
  },
  modal_avatar_text_color: {
    type: String,
    required: true,
    default: "#FFFFFF",
  },
  modal_avatar_text_hover_color: {
    type: String,
    required: true,
    default: "#DDDDDD",
  },
  modal_avatar_clostech_logo: {
    type: Boolean,
    required: true,
    default: true,
  },
  modal_avatar_business_logo: {
    type: String,
    required: true,
    default: "",
  },
  store_id: {
    type: Number,
    required: true,
  },
});

const CustomizationModel = model<ICustomizations>(
  "tienda-nube-customizations",
  customizationsSchema
);
export default CustomizationModel;
