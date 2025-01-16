export class GlobalConstants{
  //message
  public static readonly genericError:string = "Something went wrong. Please try later";

  //Regex
  public static readonly nameRegex:string = "[a-zA-Z0-9]+";
  public static readonly emailRegex: string = "^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[a-zA-Z]{2,}$";
  public static readonly contactNumberRegex:string = "^[e0-9]{8,10}$";

  //variable
  public static readonly error:string = "error"

}
