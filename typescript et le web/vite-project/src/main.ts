import { setupCharacter } from './character.ts'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>A journey in the middle earth</h1>
    <br><br>
    <br><br>
    <div class="card">
        <div id="dwarf" style="background-color: black; width: 80px; height: 100px;"></div>
    </div>
    <br><br>
    <br><br>
    <p>
        Use z,q,s,d or arrow keys to move the dwarf
    </p>
  </br
`

setupCharacter(document.querySelector<HTMLDivElement>('#dwarf')!)
