import { ContentCompany, ICompany, IPostCompany } from "@/models/company.model";
import { ContentVacancy, IVacancy } from "@/models/vacancie.model";
import  {HttpClient}  from "../utils/client-https";

export class ApiService {
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAll(url:string){
        try{
            const response = this.httpClient.get<IVacancy | ICompany>(url);
            return response
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    async findById(url:string,id:string){
        try{
            const response = this.httpClient.get<ContentVacancy | ContentCompany>(`${url}/${id}`);
            return response
        } catch(error){
            console.log(error);
            throw error;
        }
    }

    async destroy (url: string,id:string){
        try{
            const dataToDelete = this.httpClient.delete(`${url}/${id}`);
            return dataToDelete
        } catch(error){
            console.log(error);
            throw error;
        }
    }
    async post(url:string,body:IPostCompany){
        try{
            const newData = await this.httpClient.post<IPostCompany, ContentCompany>(url,body);
            return newData
        }catch(error){
            console.log(error);
            throw error;
        }
    }        

    async edit(url:string, id:string, body:IPostCompany){
        try{
            const editData = await this.httpClient.put<IPostCompany,ContentCompany>(`${url}/${id}`,body);
            return editData;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}