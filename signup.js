
            function exit(){
                self.close();
            }
            
            function pwchek(){
                    var pwd1 = document.getElementById('create_pwd').value;
                    var pwd2 = document.getElementById('check_pwd').value;
                    if (pwd2 == ""){
                        document.getElementById('alert_success').textContent="";
                    } else if(pwd1 != pwd2){
                        document.getElementById('alert_success').textContent="Check please Password.";
                    } else {
                        document.getElementById('alert_success').textContent="have the same Password.";
                        return false;
                    }
                };