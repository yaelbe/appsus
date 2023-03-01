import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'
import demoNotes from '../../../assets/demo/keep.json' assert { type: 'json' }

const KEEP_KEY = 'keepDB'
var notes = demoNotes
export const noteService = {
  query,
  //   get,
  //   post,
  //   remove,
  //   put,
}
function query() {
  return Promise.resolve(notes)
}
