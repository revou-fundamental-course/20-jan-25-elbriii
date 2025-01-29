function kalkulasi(){
            let weight = document.getElementById("Input-berat-badan").value;
            let height = document.getElementById("Input-tinggi-badan").value;
            let usia = document.getElementById("Input-usia").value;
            let gender = document.querySelector('input[name="gender"]:checked');

            if (weight === "" || height === "" || weight <= 0 || height <= 0) {
                alert("Masukkan berat dan tinggi badan yang valid!");
                return;
            }

            if (!gender) {
                alert("Harap pilih gender!");
                return;

            }
            
            if (usia === "" || usia <= 0) {
                alert("Harap masukkan usia yang valid!");
                return;
            }

            height = height / 100;

            let bmi = (weight / (height * height)).toFixed(1);

            let category = "";
            if (bmi < 18.5) {
                category = "Kurus";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                category = "Normal";
            } else if (bmi >= 25 && bmi <= 29.9) {
                category = "Berat Badan Berlebih";
            } else if (bmi >= 30 && bmi <= 34.9) {
                category = "Obesitas Kelas 1";
            } else if (bmi >= 35 && bmi <= 39.9) {
                category = "Obesitas Kelas 2";
            } else {
                category = "Obesitas Kelas 3";
            }

            let message = "";
            if (bmi < 18.5) {
                message = "Makan lebih banyak lagi ya!";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                message = "badan kamu sudah bagus ayo pertahankan!";
            } else if (bmi >= 25 && bmi <= 29.9) {
                message = "eitss kurangin makanan dikit yaa!";
            } else if (bmi >= 30 && bmi <= 34.9) {
                message = "jangan makan kebanyakaan ya!";
            } else if (bmi >= 35 && bmi <= 39.9) {
                message = "ayo semangat coba olahraga dan turunin berat badan";
            } else {
                message = "hati hati cepet turunkan beratmu!";
            }

            document.getElementById("result-bmi").innerHTML = `<strong>${bmi}</strong>`;
            document.getElementById("category").innerHTML = `<strong>${category}</strong>`;
            document.getElementById("message").innerHTML = `<strong>${message}</strong>`;
              return false;
        }   

        function reset() {
            document.getElementById("Input-berat-badan").value = "";
            document.getElementById("Input-tinggi-badan").value = "";
            document.getElementById("Input-usia").value = "";
        }

