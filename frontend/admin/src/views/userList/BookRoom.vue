<template>
  <div class="row">
    <div class="col-6">
      <div class="image w-95 h-100">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
          class="w-100 h-100"
        />
      </div>
    </div>
    <div class="m-auto col-6">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(bookRoom)" class="form" ref="form">
          <div class="m-auto">
            <div class="option">
              <label for="">Tên</label>
              <ValidationProvider
                name="Name"
                rules="required"
                v-slot="{ errors }"
              >
                <input type="text" class="form-control" v-model="name" />
                <div class="text-left">
                  <span class="warning">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="option">
              <label for="">Email</label>
              <ValidationProvider
                name="Email"
                rules="required|email"
                v-slot="{ errors }"
              >
                <input type="text" class="form-control" v-model="email" />
                <div class="text-left">
                  <span class="warning">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
            <!-- <div class="park mb-3">
              <label for="">Park ID</label>
              <input type="text" class="form-control" v-model="park_id">
            </div> -->
            <div class="option">
              <label for="">Ngày sinh</label>
              <ValidationProvider
                name="Birthday"
                rules="required"
                v-slot="{ errors }"
              >
                <input type="date" class="form-control" v-model="birthday" />
                <div class="text-left">
                  <span class="warning">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="option row">
              <b-col>
                <label for="">Giới tính</label>
                <ValidationProvider
                  name="Birthday"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <b-form-select
                    class="position__select"
                    v-model="gender"
                    :options="genderOption"
                  />
                  <div class="text-left">
                    <span class="warning">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </b-col>
              <b-col>
                <label for="">Số điện thoại</label>
                <ValidationProvider
                  name="Phone"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <input type="number" class="form-control" v-model="phone" />
                  <div class="text-left">
                    <span class="warning">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </b-col>
            </div>
            <div class="option">
              <label for="">Identity Card</label>
              <ValidationProvider
                name="Identity Card"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="number"
                  class="form-control"
                  v-model="identity_card"
                />
                <div class="text-left">
                  <span class="warning">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="option">
              <label for="">Thời gian bắt đầu</label>
              <ValidationProvider
                name="Start Time"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="datetime-local"
                  class="form-control"
                  v-model="start_time"
                />
                <div class="text-left">
                  <span class="warning">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="option">
              <label for="">Thời gian kết thúc</label>
              <ValidationProvider
                name="End Time"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="datetime-local"
                  class="form-control"
                  v-model="end_time"
                />
                <div class="text-left">
                  <span class="warning">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="option">
              <label for="">Tiền cọc</label>
              <ValidationProvider
                name="Deposit"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="number"
                  min="1000000"
                  class="form-control"
                  v-model="deposit"
                />
                <div class="text-left">
                  <span class="warning">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            </div>
          </div>
          <div class="m-auto d-flex justify-content-center">
            <button type="submit" class="btn btn-info">Trao phòng</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import moment from "moment";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  props: ["id", "user_id", "start"],
  data() {
    return {
      name: null,
      email: null,
      room_type: null,
      dataMoney: [
        { firstHour: 2000000, nextHour: 1500000 },
        { firstHour: 1000000, nextHour: 700000 },
        { firstHour: 700000, nextHour: 500000 },
        { firstHour: 2500000, nextHour: 2000000 },
      ],
      birthday: null,
      phone: null,
      identity_card: null,
      start_time: null,
      end_time: null,
      park_id: null,
      deposit: null,
      gender: 1,
      genderOption: [
        { value: 0, text: "Male" },
        { value: 1, text: "Female" },
      ],
    };
  },

  mounted() {
    if (this.user_id) {
      this.getInfoCustomer(this.user_id);
    }
  },
  created() {
    this.$store.dispatch("room/getInfoRoom", this.id).then((res) => {
      this.room_type = res.room.room_type_id;
    });
  },
  watch: {
    start_time() {
      this.getMoney();
    },
    end_time() {
      this.getMoney();
    },
  },
  methods: {
    getMoney() {
      if (this.end_time && this.start_time && this.end_time > this.start_time) {
        var a = moment(this.start_time); //now
        var b = moment(this.end_time);
        if (b.diff(a, "hours") <= 1) {
          this.deposit =
            this.dataMoney[this.room_type - 1].firstHour/2;
        } else {
          this.deposit =
            (this.dataMoney[this.room_type - 1].firstHour +
            this.dataMoney[this.room_type - 1].nextHour *
              (b.diff(a, "hours") - 1))/2;
        }
      }
    },
    async bookRoom() {
      const payload = {
        name: this.name,
        email: this.email,
        id: this.id,
        birthday: this.birthday,
        phone: this.phone,
        identity_card: this.identity_card,
        start_time: this.start_time,
        end_time: this.end_time,
        gender: this.gender,
        money: this.deposit,
        password: 123456,
      };
      if (this.end_time <= this.start_time) {
        alert("Ngay ket thuc phai lon hon ngay bat dau");
        return;
      }
      if (!this.user_id) {
        await this.$store
          .dispatch("customer/bookRoom", payload)
          .then((respone) => {
            if (!respone.success) {
              alert(respone.message);
              return;
            }
            alert("Dat phong thanh cong");
            this.$router.push({ name: "Room" });
            this.getQrCode();
          });
      } else {
        const params = {
          user_id: this.user_id,
          start_time: this.start,
        };
        await this.$store
          .dispatch("customer/updateBookRoom", params)
          .then(() => {
            alert("Dat phong thanh cong");
            this.$router.push({ name: "Room" });
            this.getQrCode();
          });
      }
    },

    async getInfoCustomer(customer_id) {
      const params = {
        customer_id: customer_id,
        start_time: this.start,
      };
      await this.$store
        .dispatch("customer/getInfoCustomer", params)
        .then((res) => {
          this.name = res.data.name;
          this.email = res.data.email;
          this.birthday = res.data.birthday;
          this.gender = res.data.gender;
          this.phone = res.data.phone;
          this.identity_card = res.data.identity_card;
          this.deposit = res.data.money;
          this.start_time = moment(res.data.start_time).format(
            "YYYY-MM-DDThh:mm"
          );
          this.end_time = moment(res.data.end_time).format("YYYY-MM-DDThh:mm");
        });
    },

    async updatePark() {
      const payload = {
        room_id: this.id,
        park_id: this.park_id,
        start_time: this.start_time,
        end_time: this.end_time,
      };
      await this.$store.dispatch("customer/updatePark", payload);
    },
    async getQrCode() {
      let imgSrc =
        "https://chart.googleapis.com/chart?cht=qr&chl=" +
        this.email +
        this.start_time +
        this.id +
        "&chs=160x160&chld=L|0";
      const params = {
        imgSrc: imgSrc,
        email: this.email,
        id: this.id,
        code: this.email + this.start_time + this.id,
      };
      await this.$store.dispatch("user/bookRoom", params);
    },
  },
};
</script>

<style lang="scss" scoped>
.warning {
  color: red;
  font-size: 14px;
}
label {
  font-size: 18px;
  font-weight: bold;
}

.option {
  margin-bottom: 20px;
}

button {
  margin: auto;
  width: 200px;
  font-size: 20px;
}
</style>
