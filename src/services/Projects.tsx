/**
 * @author Devam Sisodraker <devam@alumni.ubc.ca>
 */

import * as firebase from 'firebase';
import { BehaviorSubject } from "rxjs";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

export interface Project {
    _id: string,
    name: string,
    shortDescription: string,
    longDescription: string,
    images: Array<string>,
    lastUpdated: number
}

export class ProjectsService {

    projectsRef: firebase.firestore.CollectionReference;
    projects: Array<Project> = [];
    projects$: BehaviorSubject<Array<Project>> = new BehaviorSubject<Array<Project>>([]);

    constructor() {
        this.projectsRef = firebase.firestore()
            .collection('Projects');
        this.setupStreams();
    }

    /**
     * Setup the Behaviour subject
     */
    private setupStreams() {
        const db = firebase.firestore();
        this.projectsRef.onSnapshot(collection => {

            const projects = [];

            collection.forEach(document => {
                const data = document.data();
                const project: Project = {
                    _id: data['_id'] === undefined ? '' : data['_id'],
                    name: data['name'] === undefined ? '' : data['name'],
                    shortDescription: data['shortDescription'] === undefined ? '' : data['shortDescription'],
                    longDescription: data['longDescription'] === undefined ? '' : data['longDescription'],
                    images: data['images'] === undefined ? [] : data['images'],
                    lastUpdated: data['lastUpdated'] === undefined ? 0 : data['lastUpdated'],
                };

                projects.push(project);
            });

            this.projects$.next(projects);
            this.projects = projects;
        });
    }

    /**
     * Finds a project
     * @param {string} id 
     * @returns {Project}
     */
    public getProject(id: string): Project {
        return this.projects.filter(project => project._id === id)[0];
    }

}



    



