import {File, Figma, PenSquare, Video, Github} from '../../node_modules/pixelarticons/react'

export default function Herramientas() {
  return (
    <>
        <h1>Herramientas</h1>

        <div className="grid grid-cols-3 gap-3">
            <div className="">
                <File className='title'/>
                <ul className="">
                    <li>Excel</li>
                    <li>Word</li>
                </ul>
            </div>

            <div className="">
                <Figma/> Figma
            </div>

            <div className="">
                <ul className="">
                    <PenSquare/>
                    <li>Clip Studio Paint</li>
                    <li>Aseprite</li>
                </ul>
            </div>

            <div className="">
                <Video/>
                Adobe Premiere
            </div>

            <div className="">
                <Github/>
                Git
            </div>
        </div>
    </>
  )
}
