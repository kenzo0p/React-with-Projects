import { Client, Databases, ID, Storage, Query } from "appwrite"
import conf from "../conf/conf";

export class Service {
    client = new Client();
    databases;
    storage;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }


    async createPost({ title, slug, content, fearuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    fearuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("APPWRITE SERVICE :: CREATEPOST :: ERROR", error)
        }
    }

    async updatePost(slug, { title, content, fearuredImage, status, }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    fearuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("APPWRITE SERVICE :: UPDATEPOST :: ERROR", error)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,


            )
            return true;
        } catch (error) {
            console.log("APPWRITE SERVICE :: DELETEPOST :: ERROR", error)
            return false;
        }
    }
    
    async getPost(slug) {
        try {
           return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,

            )
            return true;
        } catch (error) {
            console.log("APPWRITE SERVICE :: GETPOST :: ERROR", error)
            return false;
        }
    }

    async getAllPOsts(queries = [Query.equal("status" , "active")]){ 
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
            )
        } catch (error) {
            console.log("APPWRITE SERVICE :: GETALLPOST :: ERROR", error)
            return false
        }
    }


    //file upload service -- storage

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("APPWRITE SERVICE :: UPLOADFILE :: ERROR", error)
            return false
        }
    }
    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
            return true
        } catch (error) {
            console.log("APPWRITE SERVICE :: DELETEFILE :: ERROR", error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }
    


}


const service = new Service()

export default service