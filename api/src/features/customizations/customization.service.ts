import CustomizationModel, { ICustomizations } from "src/models/customizations";

class CustomizationService {
  public async createCustomization(
    customization: ICustomizations
  ): Promise<ICustomizations> {
    const { store_id } = customization;

    const result = await CustomizationModel.findOneAndUpdate(
      { store_id },
      customization,
      { new: true, upsert: true }
    );

    return result;
  }

  public async getCustomization(store_id: number): Promise<ICustomizations> {
    const result = await CustomizationModel.findOne({ store_id });

    return result as ICustomizations;
  }
}

export default new CustomizationService();
