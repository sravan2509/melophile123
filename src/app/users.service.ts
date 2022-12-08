import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService {

    constructor(private http:HttpClient) {}

    getUsers() {
        return this.http.get('/api/users');
    }
    addUsers(firstName: string, lastName: string, email:  string, phoneNumber: string,)
    {
        this.http.post('/api/users',{ firstName, lastName, email, phoneNumber})
        .subscribe((responseData) => {
            console.log(responseData);
        });
    }
    deleteUser(userId: string) {
        this.http.delete("/api/users/" + userId)
            .subscribe(() => {
                console.log('Deleted: ' + userId);
            });
            // location.reload();
    }
    updateUser(userId: string,firstName: string, lastName: string, email:  string, phoneNumber: string)
    {
        this.http.put("/api/users/" +
        userId,{ firstName, lastName, email, phoneNumber })
        .subscribe(() => {
            console.log('Updated: ' + userId);
        });
    }
    getUser(userId: string) {
        return this.http.get('/api/users/'+ userId);
      }


      getReviews() {
        return this.http.get('/api/reviews');
    }
    addReviews(firstName: string, rate: string, review:  string)
    {
        this.http.post('/api/reviews',{ firstName, rate, review})
        .subscribe((responseData) => {
            console.log(responseData);
        });
    }
    deleteReview(reviewId: string) {
        this.http.delete("/api/reviews/" + reviewId)
            .subscribe(() => {
                console.log('Deleted: ' + reviewId);
            });
            location.reload();
    }
    updateReview(reviewId: string,firstName: string, rate: string, review: string)
    {
        this.http.put("/api/reviews/" +
        reviewId,{ firstName, rate, review })
        .subscribe(() => {
            console.log('Updated: ' + reviewId);
        });
    }
    getReview(reviewId: string) {
        return this.http.get('/api/reviews/'+ reviewId);
      }


      getSubscriptions() {
        return this.http.get('/api/subscription');
    }
    addSubscription(subtype:string){
        console.log(subtype)
        return this.http.post('/api/subscription',{subscribed:subtype})

    }
    deleteSubscription(collection:{}){
        return this.http.post('/api/deleteSubscription',{query:collection})
    }
    updateSubscription(collection:{},value:string){
        return this.http.post('/api/updateSubscription',{query:collection,subscribed:value})
    }



}
