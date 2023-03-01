import { storageService } from "../../../services/async-storage.service.js";
import { utilService } from "../../../services/util.service.js";
import demoMails from "../../../assets/demo/mail.json" assert { type: "json" };

const MAIL_KEY = "mailDB";

_createDemo();

export const mailService = {
  query,
  get,
};

function query(filterBy = {}) {
  return storageService.query(MAIL_KEY).then();
}

function get(mailId) {
  return storageService.get(MAIL_KEY, mailId);
}

function _createDemo() {
  console.log("hi");
  const mails = demoMails;
  _save(MAIL_KEY, mails);
}

function _save(Key, item) {
  utilService.saveToStorage(Key, item);
}
