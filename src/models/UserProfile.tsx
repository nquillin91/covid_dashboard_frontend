export default class UserProfileModel {
  	username: string;
  	firstName: string;
  	middleName: string;
  	lastName: string;
  	gender: string;
  	birthDate: string;
  	phoneNumber: string;
  	zipcode: string;
  	hasPreExistingConditions: boolean;
  	followingHygieneGuidelines: boolean;
  	adheringToPPPGuidelines: boolean;
  	vaccineStatus: string;
  	hasRoommates: boolean;
  	directlyExposedCount: number;
  	indirectlyExposedCount: number;
  	firstResponder: boolean;
  	essentialWorker: boolean;

    constructor() {
        this.username = '';
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.gender = '';
        this.birthDate = '';
        this.phoneNumber = '';
        this.zipcode = '';
        this.hasPreExistingConditions = false;
        this.followingHygieneGuidelines = false;
        this.adheringToPPPGuidelines = false;
        this.vaccineStatus = 'Not Vaccinated';
        this.hasRoommates = false;
        this.directlyExposedCount = 0;
        this.indirectlyExposedCount = 0;
        this.firstResponder = false;
        this.essentialWorker = false;
    }
}