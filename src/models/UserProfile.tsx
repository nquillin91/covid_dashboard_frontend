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
  	isFollowingHygieneGuidelines: boolean;
  	isAdheringToPPPGuidelines: boolean;
  	vaccineStatus: string;
  	hasRoommates: boolean;
  	directlyExposedCount: number;
  	indirectlyExposedCount: number;
  	isFirstResponder: boolean;
  	isEssentialWorker: boolean;

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
        this.isFollowingHygieneGuidelines = false;
        this.isAdheringToPPPGuidelines = false;
        this.vaccineStatus = 'Not Vaccinated';
        this.hasRoommates = false;
        this.directlyExposedCount = 0;
        this.indirectlyExposedCount = 0;
        this.isFirstResponder = false;
        this.isEssentialWorker = false;
    }
}