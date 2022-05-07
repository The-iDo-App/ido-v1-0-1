import paperstack from "paperstack";
import {
  clientSecret,
  clientID,
  paperstackEmail,
  paperstackPassword,
} from "@env";

const client = new paperstack(
  paperstackEmail,
  paperstackPassword,
  clientSecret,
  clientID
);

const init = client.init();
export const paperStackClient = client;
