import { ImageResponse } from 'next/server'
 

export const runtime = 'edge'
 
export const alt = 'Изображение главной страницы'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {

  return new ImageResponse(
    (
      <div
          style={{
            background: "#f6f6f6",
            fontSize: 80,
            color: "#e83801",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            textTransform: "uppercase",
          }}
        >
          DRIVERAVE.RU
        </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}