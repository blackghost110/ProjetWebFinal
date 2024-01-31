import {ApiException} from "@common/api";
import {ApiCodeResponse} from "@common/api/data/enum";

export class MemberCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_CREATE_EXCEPTION, 401);
    }
}
export class MemberNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_NOT_FOUND_EXCEPTION, 200);
    }
}
export class MemberDeleteException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_DELETE_EXCEPTION, 401);
    }
}
export class MemberListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_LIST_EXCEPTION, 200);
    }
}
export class MemberUpdateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBER_UPDATE_EXCEPTION, 200);
    }
}


export class MemberPlanCreateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBERPLAN_CREATE_EXCEPTION, 401);
    }
}
export class MemberPlanNotFoundException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBERPLAN_NOT_FOUND_EXCEPTION, 200);
    }
}
export class MemberPlanDeleteException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBERPLAN_DELETE_EXCEPTION, 401);
    }
}
export class MemberPlanListException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBERPLAN_LIST_EXCEPTION, 200);
    }
}
export class MemberPlanUpdateException extends ApiException {
    constructor() {
        super(ApiCodeResponse.MEMBERPLAN_UPDATE_EXCEPTION, 200);
    }
}

