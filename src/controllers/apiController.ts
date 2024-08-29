import { IEventData } from "@/models/IEventData";
import apiService from "@/services/apiService";

class ApiController {
  public async fetchData(): Promise<void> {
    try {
      const response = await apiService.get<IEventData>(
        "events/get-event-data"
      );
    } catch (error) {
      console.error(error);
    }
  }
}
export default new ApiController();
