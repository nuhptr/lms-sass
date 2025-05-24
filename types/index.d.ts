// type User = {
//   name: string;
//   email: string;
//   image?: string;
//   accountId: string;
// };

interface CreateUser {
     email: string;
     name: string;
     image?: string;
     accountId: string;
}

interface Avatar {
     userName: string;
     width: number;
     height: number;
     className?: string;
}

interface SavedMessage {
     role: "user" | "system" | "assistant";
     content: string;
}

enum Subject {
     maths = "maths",
     language = "language",
     science = "science",
     history = "history",
     coding = "coding",
     geography = "geography",
     economics = "economics",
     finance = "finance",
     business = "business",
}

type Companion = Models.DocumentList<Models.Document> & {
     $id: string;
     name: string;
     subject: Subject;
     topic: string;
     duration: number;
     bookmarked: boolean;
};

interface CreateCompanion {
     name: string;
     subject: string;
     topic: string;
     voice: string;
     style: string;
     duration: number;
}

interface GetAllCompanions {
     limit?: number;
     page?: number;
     subject?: string | string[];
     topic?: string | string[];
}

interface BuildClient {
     key?: string;
     sessionToken?: string;
}

interface SearchParams {
     searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface CompanionComponentProps {
     companionId: string;
     subject: string;
     topic: string;
     name: string;
     userName: string;
     userImage: string;
     voice: string;
     style: string;
}
