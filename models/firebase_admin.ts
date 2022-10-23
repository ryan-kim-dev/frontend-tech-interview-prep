import * as admin from 'firebase-admin';

/** 인터페이스: 기본 명세를 정의한다. */
interface Config {
  credential: {
    privateKey: string;
    clientEmail: string;
    projectId: string;
  };
}

/** 싱글톤 패턴으로 FirebaseAdmin 인스턴스를 어디서든 불러올 수 있도록 export default. */
export default class FirebaseAdmin {
  /** 인스턴스 정의 */
  public static instance: FirebaseAdmin;

  /** 초기화 여부 확인 */
  private init = false;

  public static getInstance(): FirebaseAdmin {
    // getInstance 메서드 정의하기: FirebaseAdmin 클래스를 받아와서 인스턴스 생성
    if (
      FirebaseAdmin.instance === undefined ||
      FirebaseAdmin.instance === null
    ) {
      // 인스턴스가 undefined 이거나 null 일 경우 초기화를 진행한다.
      FirebaseAdmin.instance = new FirebaseAdmin();
      // 환경을 초기화한다.
      FirebaseAdmin.instance.bootstrap();
    }

    // getInstance 메서드를 호출하면 인스턴스를 반환한다.
    return FirebaseAdmin.instance;
  }

  /** 환경을 초기화하는 메서드를 bootstrap 이란 이름의 메서드로 정의함 */
  private bootstrap(): void {
    /** haveApp: 앱이 등록되어 있는지 확인한다. */
    const haveApp = admin.apps.length !== 0; // haveApp이 true면 앱이 등록된 것임.
    if (haveApp) {
      this.init = true;
      return; // 앱이 등록되어있으면 초기화 상태를 확인하는 init의 값을 true로 변경하고 코드 종료
    }

    /** 기존에 정의한 Config 인터페이스를 이용하여 그 값을 객체에 할당 */
    const config: Config = {
      credential: {
        projectId: process.env.projectId || '',
        clientEmail: process.env.clientEmail || '',
        privateKey: (process.env.privateKey || '').replace(/\\n/g, '\n'),
        // json에 작성된 개행문자를 인식해서 실제로 개행처리를 하도록 replace 메서드 사용
      },
    };

    // 환경변수에 등록된 값을 담은 credential 객체의 값을 앱 초기화시 전달하여 인증할 정보 전달
    admin.initializeApp({
      credential: admin.credential.cert(config.credential),
    });
    console.info('bootstrap firebase admin'); // 잘 전달되었는지 확인용
  }

  /** firestore를 반환 */
  // tip: 주석 작성 시 애스터리스크 두번 작성 시 코드에 마우스 호버 시 주석 내용 노출
  public get Firebase(): FirebaseFirestore.Firestore {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.firestore();
  }

  public get Auth(): admin.auth.Auth {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.auth();
  }
}
