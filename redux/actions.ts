const DARK_MODE = 'DARK_MODE'


export function darkMode(){
  console.log('called on dark')
  return{
    type:DARK_MODE,
  }
}
