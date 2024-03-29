import Wave from "@src/assets/wave.svg?react"
import style from "./WaveWrapper.style"

const WaveWrapper = () => {
  return <>
    <div css={style.topWaveWrapper}>
      <Wave css={style.wave} />
    </div>
    <div css={style.bottomWaveWrapper}>
      <Wave css={style.wave} />
    </div>
  </>
}

export default WaveWrapper;