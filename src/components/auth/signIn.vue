<template>
    <v-card color="transparent" height="500" flat>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-card-title primary-title>
                <span class="title">로그인</span>
                <v-spacer></v-spacer>
                <span class="caption">
                    또는&nbsp;
                    <a>회원가입</a>
                </span>
            </v-card-title>
            <v-card-actions>
                <v-btn color="primary" block @click="signInWithGoogle">
                    <v-icon>mdi-google</v-icon>
                    <v-divdedr vertical class="mx-3"></v-divdedr>
                    Google 계정으로 로그인
                </v-btn>
            </v-card-actions>
            <v-container grid-list-md fluid>
                <v-layout row wrap>
                    <v-flex xs5>
                        <v-divider class="mt-2"></v-divider>
                    </v-flex>
                    <v-flex xs2>
                        또는
                    </v-flex>
                    <v-flex xs5>
                        <v-divider class="mt-2"></v-divider>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-card-text>
                <v-text-field label="이메일"></v-text-field>
                <v-text-field label="비밀번호"></v-text-field>
            </v-card-text>
            <!-- <div >이 페이지는 ~~</div> -->

            <v-card-actions>
                <v-checkbox label="로그인 정보저장" v-model="value" value="value">
                </v-checkbox>
                <v-spacer></v-spacer>
                <v-btn color="primary">로그인</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>
<script>
export default {
    data(){
        return {
            valid: false
        }
    },
    methods:{
        async signInWithGoogle(){
          var provider = new this.$firebase.auth.GoogleAuthProvider();
          this.$firebase.auth().languageCode = 'ko';
          const r = await this.$firebase.auth().signInWithPopup(provider)
          console.log(r)
      }
    }
}
</script>