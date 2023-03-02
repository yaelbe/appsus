import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'
import demoNotes from '../../../assets/demo/keep.json' assert { type: 'json' }

const KEEP_KEY = 'keepDB'
__createNotes()
export const noteService = {
  query,
  //   get,
  //   post,
  //   remove,
  //   put,
  save,
}

function query() {
  return storageService.query(KEEP_KEY)
}

function save(note) {
  if (note.id) {
    return storageService.put(KEEP_KEY, note)
  }
  note.id = utilService.makeId()
  return storageService.post(KEEP_KEY, note, false)
}

function __createNotes() {
  const notes = utilService.loadFromStorage(KEEP_KEY)
  if (!notes || !notes.length) {
    utilService.saveToStorage(KEEP_KEY, demoNotes)
  }
}
