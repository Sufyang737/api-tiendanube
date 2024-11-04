import { Schema, model, Document } from "mongoose";

export interface ICredentials extends Document {
  access_token: string;
  token_type: string;
  scope: string;
  user_id: number;
  createdAt?: Date;
}

const credentialSchema = new Schema<ICredentials>({
  access_token: {
    type: String,
    required: true,
  },
  token_type: {
    type: String,
    required: true,
  },
  scope: {
    type: String,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // Expiración automática opcional (en segundos)
  },
});

const CredentialModel = model<ICredentials>(
  "tienda-nube-credentials",
  credentialSchema
);
export default CredentialModel;
