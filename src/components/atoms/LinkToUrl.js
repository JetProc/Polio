export function SwitchUrl(props){
    var url="/Default";
    switch(props.value){
      case 'overwatch':
        url = 'https://playoverwatch.com/ko-kr/';
        break;
      case 'google':
        url='https://www.google.com/';
        break;
    case 'github':
        url='https://github.com/jetProc/';
        break;
    case 'facebook':
        url="https://www.facebook.com/profile.php?id=100005557187351/";
        break;
    case 'MyProjects':
        url="/MyProjects"
        break;
    case 'MyProfile':
        url="/MyProfile"
        break;
    case 'RecycleBin':
        url="/RecycleBin"
        break;
    case 'JumpUp':
        url="https://play.google.com/store/apps/details?id=com.JetProc.JumpUp";
        break;
    case 'Savers':
        url="https://savers.vercel.app/"
        break;
    case 'fileTest':
        url='/FileTest'
        break;
        
    default:
        url='/Default';
        break;    

    }
      return url;
  }