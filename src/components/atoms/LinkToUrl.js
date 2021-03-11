export function SwitchUrl(props){
    var url="";
    if(props.isLink)
    {
        url=props.value;
        return url;
    }
    switch(props.value){
      case 'overwatch':
        url = 'battlenet:://';
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
        url="/My Projects";
        break;
    case 'MyProfile':
        url="/My Profile";
        break;
    case 'RecycleBin':
        url="/Recycle Bin";
        break;
    case 'School' :
        url="/School";
        break;
    case 'game' :
        url="/My games";
        break;
    case 'JumpUp':
        url="https://play.google.com/store/apps/details?id=com.JetProc.JumpUp";
        break;
    case 'Savers':
        url="https://savers.vercel.app/"
        break;
    case 'Holdable':
        url="https://github.com/JetProc/Holdable";
        break;
    case 'Holdable2':
        url="https://github.com/JetProc/Holdable2";
        break;
    case 'Shiba':
        url="https://github.com/JetProc/SHIBAs-English-Class";
        break;
    case 'Hangeul':
        url="https://github.com/JetProc/defence-Hangeul";
        break;
    case 'naver':
        url="https://www.naver.com";
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