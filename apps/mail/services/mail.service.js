import { storageService } from "../../../services/async-storage.service.js";
import { utilService } from "../../../services/util.service.js";
import demoMails from "../../../assets/demo/mail.json" assert { type: "json" };

const MAIL_KEY = "mailDB";

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus",
};

_createDemo();

export const mailService = {
  query,
  get,
  getEmptyMail,
  save,
  remove,
  loggedinUser,
  update,
  createMailFromNote,
};

function query(filterBy = {}) {
  return storageService.query(MAIL_KEY).then();
}

function get(mailId) {
  return storageService.get(MAIL_KEY, mailId);
}

function remove(mailId) {
  return storageService.remove(MAIL_KEY, mailId);
}

function _createDemo() {
  const mails = utilService.loadFromStorage(MAIL_KEY);
  if (!mails || !mails.length) {
    utilService.saveToStorage(MAIL_KEY, demoMails);
  }
}

function save(mail) {
  return storageService.post(MAIL_KEY, mail, false);
}

function getEmptyMail() {
  return {
    id: "",
    subject: "",
    body: "",
    isRead: false,
    sentAt: null,
    removedAt: null,
    from: "user@appsus.com",
    to: "",
    isStar: false,
  };
}

function _save(Key, item) {
  utilService.saveToStorage(Key, item);
}

function update(mail) {
  return storageService.put(MAIL_KEY, mail);
}

function createMailFromNote(note) {
  console.log(note);
  console.log("Create Mail From Note");
  const mail = getEmptyMail();
  mail.id = note.id;
  mail.subject = note.info.txt;
  mail.body = note.info.subtxt || note.info.imgUrl || note.info.vidoeUrl;
  mail.sentAt = Date.now();
  mail.to = loggedinUser.email;
  mail.from = null;
  console.log(mail);
  return storageService.post(MAIL_KEY, mail);
}
