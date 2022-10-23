import * as admin from 'firebase-admin';

interface Config {
  credential: {
    privateKey: string;
    clientEmail: string;
    projectId: string;
  };
}

export default class FirebaseAdmin {
  public static instance: FirebaseAdmin;

  private init = false;

  public static getInstance(): FirebaseAdmin {
    if (
      FirebaseAdmin.instance === undefined ||
      FirebaseAdmin.instance === null
    ) {
      FirebaseAdmin.instance = new FirebaseAdmin();
    }
    return FirebaseAdmin.instance;
  }

  private bootstrap(): void {
    const haveApp = admin.apps.length !== 0;
    if (haveApp) {
      this.init = true;
      return;
    }

    const config: Config = {
      credential: {
        projectId: process.env.projectId || '',
        clientEmail: process.env.clientEmail || '',
        privateKey: (process.env.privateKey || '').replace(/\\n/g, '\n'),
      },
    };
    admin.initializeApp({
      credential: admin.credential.cert(config.credential),
    });
    console.info('bootstrap firebase admin');
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
