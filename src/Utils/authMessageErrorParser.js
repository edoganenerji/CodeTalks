export default function(ErrCode){
    switch (ErrCode) {
        case "auth/email-already-exists":
            return " Kullanıcı zaten kayıtlı "
        case "auth/invalid-password":
            return " Geçersiz parola "
        case "auth/invalid-email":
            return " Geçersiz e-posta "
        case "auth/user-not-found":
            return " Kullanıcı bulunamadı "
        
        default:
            return ErrorCode
    }
}