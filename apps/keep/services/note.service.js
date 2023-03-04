import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'
import demoNotes from '../../../assets/demo/keep.json' assert { type: 'json' }

const KEEP_KEY = 'keepDB'
__createNotes()
export const noteService = {
  query,
  //   get,
  //   post,
  remove,
  //   put,
  save,
  convertMail,
}

function query() {
  return storageService.query(KEEP_KEY)
}

function save(note) {
  if (note.id) {
    return storageService.put(KEEP_KEY, note).catch((err) => console.log('error PUT', err))
  }
  note.id = utilService.makeId()
  return storageService.post(KEEP_KEY, note, false).catch((err) => console.log('error POST', err))
}

function remove(nodeId) {
  return storageService.remove(KEEP_KEY, nodeId).catch((err) => console.log('error REMOVE', err))
}
function convertMail(mail) {
  const mailNote = {
    info: {},
    isPinned: false,
    style: { backgroundColor: '#fff' },
  }
  mailNote.info.txt = mail.subject
  mailNote.info.subtxt = mail.body
  mailNote.info.mailId = mail.id
  mailNote.type = 'MailNote'
  return mailNote
}

function __createNotes() {
  const notes = utilService.loadFromStorage(KEEP_KEY)
  if (!notes || !notes.length) {
    utilService.saveToStorage(KEEP_KEY, demoNotes)
  }
}
