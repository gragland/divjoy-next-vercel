import { apiRequest } from "./util";

function subscribe(data) {
  return apiRequest("newsletter", "POST", data);
}

export default { subscribe };
