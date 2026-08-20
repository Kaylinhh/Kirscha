// src/utils/artistWorks.js
import { designs } from '../data/data'

// Returns every design belonging to a given artist
export function getWorksByArtist(artistId) {
  return designs.filter((d) => d.artistId === artistId)
}