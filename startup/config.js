import config from "config";

export default function checkConfig() {
  if (!config.get("jwtPrivateKey")) {
    throw new error("Jiddiy xato jwtPrivateKey topilmadi");
  }
}
