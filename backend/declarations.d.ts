declare namespace NodeJS {
    interface ProcessEnv {
      DB_URL: string;
      PORT?: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }