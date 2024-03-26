import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.ArrayList; 
import java.nio.file.*;
import java.io.*;  
import java.util.*;
class planner{
	static int checkBooked;
	public static void main(String[] args){
		Booking bk = new Booking();
		methodExecution();
	}
	static void methodExecution(){
		Booking bk = new Booking();
		welcome();
		showPreference();
		if(checkBooked == 2){
			admin.printGrid();
			getDate();
			showPreference(1);
			return;
		}
		else{
			bk.getPaymentDetails();
		}
	}
	static void typingEffect(String text) {
        int delayMillis = 50;

        for (char c : text.toCharArray()) {
            System.out.print(c);
            try {
                Thread.sleep(delayMillis);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
	static void showPreference(){
		Scanner inputObj = new Scanner(System.in);
		Packages pack = new Packages();
		Elite el = new Elite();
		Gold gd = new Gold();
		Premier pm = new Premier();
		Elegant eg = new Elegant();
		Classic cl = new Classic();
		int result = pack.selectPackages();
		if(result == 0){
			System.out.println("Sorry already booked!");
			checkBooked = 2;
		}
		else if(result == 1){
			el.selectAvailablePlansElite();
			System.out.println("\n\nPress 1 to View in detail\n\n");
			int press = inputObj.nextInt();
			if(press == 1) el.menuElite();
			//System.out.print("\033[H\033[2J");
			Booking book = new Booking();
			book.bookConfirmation();
			System.out.print("\033[H\033[2J");
			book.showBill(result);
		}
		else if(result == 2){
			gd.selectAvailablePlansGold();
			System.out.println("\n\nPress 1 to View in detail\n\n");
			int press = inputObj.nextInt();
			if(press == 1) gd.menuGold();
			//System.out.print("\033[H\033[2J");
			Booking book = new Booking();
			book.bookConfirmation();
			System.out.print("\033[H\033[2J");
			book.showBill(result);
		}
		else if(result == 3){
			pm.selectAvailablePlansPremier();
			System.out.println("\n\nPress 1 to View in detail\n\n");
			int press = inputObj.nextInt();
			if(press == 1) pm.menuPremier();
			//System.out.print("\033[H\033[2J");
			Booking book = new Booking();
			book.bookConfirmation();
			System.out.print("\033[H\033[2J");
			book.showBill(result);
		}
		else if(result == 4){
			eg.selectAvailablePlansElegant();
			System.out.println("\n\nPress 1 to View in detail\n\n");
			int press = inputObj.nextInt();
			if(press == 1) eg.menuElegant();
			//System.out.print("\033[H\033[2J");
			Booking book = new Booking();
			book.bookConfirmation();
			System.out.print("\033[H\033[2J");
			book.showBill(result);
		}
		else if(result == 5){
			cl.selectAvailablePlansClassic();
			System.out.println("\n\nPress 1 to View in detail\n\n");
			int press = inputObj.nextInt();
			if(press == 1) cl.menuClassic();
			//System.out.print("\033[H\033[2J");
			Booking book = new Booking();
			book.bookConfirmation();
			System.out.print("\033[H\033[2J");
			book.showBill(result);
		}
		else{
			System.out.println("\n\nInvalid\n\n");
		}
	}
	static void showPreference(int no){
		Scanner inputObj = new Scanner(System.in);
		System.out.println("\u001B[33mDo you want to continue booking?\u001B[0m");
		String result = inputObj.next();
		if(result.equalsIgnoreCase("yes")){
			Packages.bookedDates.remove(planner.Date);
			Packages pk = new Packages();
			pk.selectPackages(1);
		}
		else{System.out.println("Thank you!!");System.exit(0);}
	}
	ArrayList<String> contents =  new ArrayList<String>();
	static String fileName;
 	void user(String name, String mail, String address, String date){
	   	try{
	     fileName = name+".txt";
	     File userFile = new File(fileName);
	     
	     if (userFile.createNewFile()){
	         FileWriter fileInp = new FileWriter(fileName); 

	         fileInp.write(name + "\n" + mail + "\n" + address + "\n" + date);
	         fileInp.close();    

	         contents.addAll(Files.readAllLines(Paths.get(fileName)));
	         //System.out.println(Files.readLine(Paths.get(fileName)));
	         
	         // for (String line : contents){
	         //   System.out.println(line);
	         // }
	         //System.out.println("New File is created!");  
	     }
	     else{ 
	        FileWriter fileInp = new FileWriter(fileName, true); 
	        //fileInp.write("welcome\n");
	        fileInp.close();    
	        contents.addAll(Files.readAllLines(Paths.get(fileName)));
	         
	         // for (String line : contents){
	         //   System.out.println(line);
	         // }
	        System.out.println("Welcome back");
	     }
	   } catch (IOException e) {
	            e.printStackTrace();
	     } 
     
  }
	//static ArrayList<String> bookedDates = new ArrayList<String>();
	static String Date;
	static String Name;
	static ArrayList<String> oldUser = new ArrayList<String>();
	static String getDate(){
		Scanner inputObj = new Scanner(System.in);
		String gettingDte = "";
		while(true){
			System.out.println("\u001B[33mDate of the event\u001B[0m");
			gettingDte = inputObj.next();
			int splitDate = Integer.parseInt(gettingDte.split("/")[0]);
			int splitMonth = Integer.parseInt(gettingDte.split("/")[1]);
			int splitYear = Integer.parseInt(gettingDte.split("/")[2]);
			if(splitDate > 0 && splitDate < 32 && splitMonth > 0 && splitMonth < 13 && splitYear > 2022 && splitYear < 2031){
				break;
			}
			else{
				System.out.println("Enter a valid date!");
			}
		}
		return gettingDte;
	}
 	// static void dispImg() {
	//   var frame = new JFrame();
	//   var icon = new ImageIcon("blossom.png");
	//   var label = new JLabel(icon);
	//   frame.add(label);
	//   frame.setDefaultCloseOperation
	//          (JFrame.EXIT_ON_CLOSE);
	//   frame.pack();
	//   frame.setSize(1000,1000);
	//   frame.setVisible(true);
 	// }
	static void welcome(){
		planner plan = new planner();
		String dateFileName = "eventDates.txt";
		Scanner inputObj = new Scanner(System.in);
		System.out.println("\t\t\t\t\t☘️  🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 ☘️\n");
		System.out.println("\t\t\t\t\t\t\t\t\u001B[1;33m_____________________________________________________________\u001B[0m");
		System.out.println();
		System.out.println("\t\t\t\t\t\t\t\t\t\u001B[1;33m☘️🌸 🇧 🇱 🇴 🇸 🇸 🇴 🇲 __________\u001B[0m\t\t\t\t\t\t\t\t\t\t");
		System.out.println("\t\t\t\t\t\t\t\t\t\t\u001B[1;33m__________ 🇼 🇪 🇩 🇩 🇮 🇳 🇬 🇸 🌸☘️\u001B[0m\t\t\t\t\t\t\t\t\t\t");
		System.out.println("\t\t\t\t\t\t\t\t\u001B[1;33m_____________________________________________________________\u001B[0m");
		typingEffect("Blossom Wedding welcomes you!!");
		typingEffect("Let us help you! Please give us the following informations\n");
		typingEffect("   1.Admin?                                  2.Customer?  \n");
		int choosed = inputObj.nextInt();
		if(choosed == 2){
		System.out.println("\u001B[33mGive us your name\u001B[0m");
		inputObj.nextLine();
		Name = inputObj.nextLine();
		try{
		Scanner file = new Scanner(new File("totalUsers.txt"));
			int index = 0;
			while(file.hasNextLine()){
				String nextLn = file.nextLine();
				oldUser.add(nextLn);
	     			index++;
			}
		}
		catch(FileNotFoundException e){
			System.out.println("File does not exist");
		}
			if(oldUser.contains(Name)){
				showPreviousData();
			}
			else{


		System.out.println("\u001B[33mYour Mail\u001B[0m");
		String Mail = inputObj.next();
		System.out.println("\u001B[33mYour Address\u001B[0m");
		String Address = inputObj.next();
		Date = getDate();
		//System.out.println(Date);
		File userDate = new File(dateFileName);
		File userName = new File("totalUsers.txt");
		try{
				if(userDate.createNewFile()){
				}
				else{
					// FileWriter dateFile = new FileWriter("eventDates.txt",true); 
					// dateFile.write(Date +"\n");
					// dateFile.close();
					FileWriter nameUser = new FileWriter("totalUsers.txt",true); 
					nameUser.write(planner.Name + "\n");
					nameUser.close();
				}

		}
		catch (IOException e) {
		    	e.printStackTrace();
		        System.out.println("deafknsjb");
		} 
		System.out.print("\033[H\033[2J");
		plan.user(Name, Mail, Address, Date);
		}

		// else{
		// 	System.out.println("Invalid choice!");
		// }
	}
	if(choosed == 1){
		System.out.println("Enter password");
		int password = inputObj.nextInt();
		if(password == 1807){
			System.out.println("\u001B[33mWelcome admin!!\u001B[0m");
			admin man = new admin();
			man.showAdminAccessibility();
		}
		else{
			System.out.println("Password missmatch!");
			System.exit(0);
		}
		}	
	}

	static void showPreviousData(){
		Scanner inputObj = new Scanner(System.in);
		System.out.println("Hey " + Name + " !!\n" + "Welcome..\n" + "It seems you have already booked for an event\n\nHere are your booking details"); 
		try{
			Scanner fileRead = new Scanner(new File(Name+"bill.txt"));
			while(fileRead.hasNextLine()){
				String nextLn = fileRead.nextLine();
				System.out.println(nextLn);
			}
		
		}
		
		catch(FileNotFoundException e){
			System.out.println("File does not exist");
		}
		System.out.println("\u001B[33mDo you want to book another event? yes/no\u001B[0m");
	     String getAns = inputObj.next();
	     if(getAns.equalsIgnoreCase("yes")){
	     	planner pln = new planner();
			pln.showPreference(1);
	     }
	     else{
	     	System.out.println("Thank you !");
	     	System.exit(0);
	     }

	}
}

class admin{
	static void showAdminAccessibility(){
		int val = 0;
		Scanner inputObj = new Scanner(System.in);
		String[] accessList = {"Change package details", "See upcoming events", "View/Edit company details"};
		System.out.println("What do you want to do?");
		for(int i=0; i<accessList.length; i++){
			System.out.println("\u001B[36m"+(i+1) + ". " + accessList[i] + "\u001B[0m");
		}
		System.out.println("Enter your choice");
		int adminCh = inputObj.nextInt();
		if(adminCh == 2){
			seeupcomingEvent();
		}
		else if(adminCh == 1){
			Elite elite = new Elite();
			Gold gold = new Gold();
			Premier premier = new Premier();
			Elegant elegant = new Elegant();
			Classic classic = new Classic();
			val = askPack();

			if(val == 1){
				elite.selectAvailablePlansElite();
				System.out.println("\n\nPress 1 to View in detail\n\n");
				int press = inputObj.nextInt();
				if(press == 1) elite.menuElite();
			}
			else if(val == 2){
				gold.selectAvailablePlansGold();
				System.out.println("\n\nPress 1 to View in detail\n\n");
				int press = inputObj.nextInt();
				if(press == 1) gold.menuGold();
			}
			else if(val == 3){
				premier.selectAvailablePlansPremier();
				System.out.println("\n\nPress 1 to View in detail\n\n");
				int press = inputObj.nextInt();
				if(press == 1) premier.menuPremier();
			}
			else if(val == 4){
				elegant.selectAvailablePlansElegant();
				System.out.println("\n\nPress 1 to View in detail\n\n");
				int press = inputObj.nextInt();
				if(press == 1) elegant.menuElegant();
			}
			else if(val == 5){
				classic.selectAvailablePlansClassic();
				System.out.println("\n\nPress 1 to View in detail\n\n");
				int press = inputObj.nextInt();
				if(press == 1) classic.menuClassic();
			}

		}
		else if(adminCh == 3){
			printDetail();
			System.out.println("Press 1 to edit Company details");
			int edit = inputObj.nextInt();
			if(edit == 1){
				System.out.println("Enter old value and newValue comma seperated");
				String both = inputObj.nextLine();
				String old = both.split(",")[0];
				String newVal = both.split(",")[1];
				try{
					updateFile("adminProfile.txt", old, newVal);
				}
				catch (IOException e) {
    					e.printStackTrace();
				}
				System.out.println("Update Success!");
				printDetail();
		System.exit(0);
			}
			else{System.exit(0);}
		}
		else{}
		changeArray(val);
	}
	static void printDetail(){
		String file = "adminProfile.txt";

        try (BufferedReader read = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = read.readLine()) != null) {
            	System.out.println(line);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
		//System.out.println(str);
	}
	static void changeArray(int packNo){
		Elite elite = new Elite();
		Gold gold = new Gold();
		String filePath;
		Premier premier = new Premier();
		Elegant elegant = new Elegant();
		Classic classic = new Classic();
		Scanner inputObj = new Scanner(System.in);
		while(true){
				System.out.println("Enter previous value and changed value comma seperated");
				String forChange = inputObj.nextLine();
				String oldValue = forChange.split(",")[0];
				String newValue = forChange.split(",")[1];
				if(packNo == 1){filePath = "elite.txt";}
				else if(packNo == 2){filePath = "gold.txt";}
				else if(packNo == 3){filePath = "premier.txt";}
				else if(packNo == 4){filePath = "elegant.txt";}
				else{filePath = "classic.txt";}

        // Call the updateFile method
        try {
        	Elite el = new Elite();
			Gold gd = new Gold();
			Premier pm = new Premier();
			Elegant eg = new Elegant();
			Classic cl = new Classic();
            updateFile(filePath, oldValue, newValue);
            System.out.println("Pack updated successfully! Press 1 to view it");
            int toSee = inputObj.nextInt();
            if(toSee == 1){
	            if(packNo == 1){el.menuElite();}
				else if(packNo == 2){gd.menuGold();}
				else if(packNo == 3){pm.menuPremier();}
				else if(packNo == 4){eg.menuElegant();}
				else{cl.menuClassic();}
			}

            System.exit(0);
        } catch (IOException e) {
            e.printStackTrace();
        }

				System.out.println(Arrays.toString(elite.hairdo));
			}
			}
		//}
			static void updateFile(String filePath, String oldValue, String newValue) throws IOException {
        // Read the content of the file into a StringBuilder
        StringBuilder content = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                // Modify the line if necessary
                line = line.replace(oldValue, newValue);
                content.append(line).append(System.lineSeparator());
            }
        }


        // Write the updated content back to the file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath))) {
            writer.write(content.toString());
        }
    	
		
	}
	static int askPack(){
		Scanner inp = new Scanner(System.in);
		int change = 0;
		while(true){
			System.out.println("Which pack do you want to make changes in?\n\n1.Elite\n2.Gold,\n3.Premier\n4.Elegant\n5.Classic");
			change = inp.nextInt();
			if(change > 0 && change < 6){
				break;
			}
			else{
				System.out.println("Invalid choice!");
			}

		}
		return change;
	}
	static ArrayList<String> toPrintBookingsName = new ArrayList<String>();
	static int date = 0;
	static ArrayList<Integer> booked = new ArrayList<Integer>();
	static void getUserAndDate(){
		try{
		Scanner check = new Scanner(new File("totalUsers.txt"));
			int index = 0;
			while(check.hasNextLine()){
				String nextLn = check.nextLine();
				toPrintBookingsName.add(nextLn);
	     			index++;
			}
		}
		catch(FileNotFoundException e){
			System.out.println("File does not exist");
		}
		for(int i=0; i<toPrintBookingsName.size(); i++){
			try{
			//Scanner checkDate = new Scanner(new file(toPrintBookingsName.get(i) + ".txt"));
				String line = Files.readAllLines(Paths.get("eventDates.txt")).get(i);
				//System.out.println(line);
				date = Integer.parseInt(line.split("/")[0]);
				//System.out.println(date);
				booked.add(date);
			}
			catch(IOException e){
				System.out.println("File does not exist");
			}
		}
	}

	static void printGrid(){
		// getUserAndDate();
		// System.out.println(booked);
		Collections.sort(booked);
		System.out.println(booked);
		//int[] booked = {1,2,6};
		String tab = "		";	
		int idx = 0;
		String[] days = {"MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"};			
		// String tab = "    ";
        // int count = 0;
		System.out.println("                                               🇩 🇪 🇨 🇪 🇲 🇧 🇪 🇷                                            ");
        for (int i = 0; i < 25; i++) {
            if (i == 0 || i % 4 == 0) {
                System.out.println("-----------------------------------------------------------------------------------------------------------------");
            } else {
                for (int j = 0; j < 8; j++) {
                    if (i == 2 && j != 7) {
                        System.out.print("|      " + days[j] + "      ");
                    }
                    // } else if ((i == 14 || i == 18 || i == 22) && (j != 7) && idx < booked.size() && (j == (booked.get(idx) / 7))) {
                    //     System.out.print("|     🟢🟢🟢    ");
                    //     idx++;
                    // }
                    else if(i==6 && j==4){if (booked.contains(1)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       1       ");}
                	else if(i==6 && j==5){if (booked.contains(2)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       2       ");}
                	else if(i==6 && j==6){if (booked.contains(3)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       3       ");}
                	else if(i==10 && j==0){if (booked.contains(4)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       4       ");}
                	else if(i==10 && j==1){if (booked.contains(5)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       5       ");}
                	else if(i==10 && j==2){if (booked.contains(6)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       6       ");}
                	else if(i==10 && j==3){if (booked.contains(7)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       7       ");}
                	else if(i==10 && j==4){if (booked.contains(8)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       8       ");}
                	else if(i==10 && j==5){if (booked.contains(9)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       9       ");}
                	else if(i==10 && j==6){if (booked.contains(10)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       10      ");}
                	else if(i==14 && j==0){if (booked.contains(11)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       11      ");}
                	else if(i==14 && j==1){if (booked.contains(12)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       12      ");}
                	else if(i==14 && j==2){if (booked.contains(13)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       13      ");}
                	else if(i==14 && j==3){if (booked.contains(14)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       14      ");}
                	else if(i==14 && j==4){if (booked.contains(15)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       15      ");}
                	else if(i==14 && j==5){if (booked.contains(16)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       16      ");}
                	else if(i==14 && j==6){if (booked.contains(17)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       17      ");}
                	else if(i==18 && j==0){if (booked.contains(18)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       18      ");}
                	else if(i==18 && j==1){if (booked.contains(19)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       19      ");}
                	else if(i==18 && j==2){if (booked.contains(20)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       20      ");}
                	else if(i==18 && j==3){if (booked.contains(21)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       21      ");}
                	else if(i==18 && j==4){if (booked.contains(22)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       22      ");}
                	else if(i==18 && j==5){if (booked.contains(23)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       23      ");}
                	else if(i==18 && j==6){if (booked.contains(24)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       24      ");}
                	else if(i==22 && j==0){if (booked.contains(25)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       25      ");}
                	else if(i==22 && j==1){if (booked.contains(26)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       26      ");}
                	else if(i==22 && j==2){if (booked.contains(27)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       27      ");}
                	else if(i==22 && j==3){if (booked.contains(28)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       28      ");}
                	else if(i==22 && j==4){if (booked.contains(29)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       29      ");}
                	else if(i==22 && j==5){if (booked.contains(30)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       30      ");}
                	else if(i==22 && j==6){if (booked.contains(31)){System.out.print("|     🟢🟢🟢    ");idx++;}else System.out.print("|       31      ");}
                     else {
                        System.out.print("|" + tab);
                    }
                }
                System.out.println();
            }
        }
	}
	static void seeupcomingEvent(){
		getUserAndDate();
		printGrid();
		System.exit(0);
	}
}

class Booking{
	Scanner inputObj = new Scanner(System.in);
	void createBillFile(String nm, String plan, int cst,String dt){
		try{
	     String filename = nm+"bill.txt";
	     File userFile = new File(filename);
	     
	     if (userFile.createNewFile()){
	         FileWriter inp = new FileWriter(filename); 

	         inp.write("🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢\n\n");
	         inp.write("\t\tName : "+nm+"\t\t\t\n\n");
	         inp.write("\t\tPlan : "+plan+"\t\t\t\n\n");
	         inp.write("\t\tAmount : "+cst+"\t\t\t\n\n");
	         inp.write("\t\tEvent : "+dt+"\t\t\t\n\n");
	         inp.write("🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢\n\n");
	         inp.close();     
	     }
	   } catch (IOException e) {
	            e.printStackTrace();
	     } 
	 
	}
	void bookConfirmation(){
		Booking bookEve = new Booking();
		System.out.println("Are you sure? Do you want to confirm booking this package?");
		String yesOrNo = inputObj.next();
		if(yesOrNo.equalsIgnoreCase("yes")){
			System.out.println("\u001B[33mPackage confirmed..\u001B[0m");
			//System.out.println("\u001B[33mEnter your Phone number\u001B[0m");
			String phNo = bookEve.getPhNo();;

			//File addToFile = new File(fileName);
			try{
					FileWriter number = new FileWriter(planner.fileName,true); 
					number.write("\n" + phNo + "\n");
					number.close();
			}
			catch (IOException e) {
		    	e.printStackTrace();
		        System.out.println("deafknsjb");
			} 


		}
		else{
			System.out.println("Select any other package..");
			planner pln = new planner();
			pln.showPreference(1);
		}
	}
	String pack = "";
	static int cost;
	void showBill(int res){

		
		if(res == 1){
			pack = "Elite";
			cost = 52000;
		}
		if(res == 2){
			pack = "Gold";
			cost = 39500;
		}
		if(res == 3){
			pack = "Premier";
			cost = 24000;
		}
		if(res == 4){
			pack = "Elegant";
			cost = 20000;
		}
		if(res == 5){
			pack = "Classic";
			cost = 16500;
		} 
			String firstSpace = " ".repeat(22-planner.Name.length()-3);
			String secSpace = " ".repeat(22-pack.length()-3);
			String thirdSpace = " ".repeat(22-(Integer.toString(cost)).length()-2);
			// String firstSpace = String.format("%" + (22 - planner.Name.length()) + "s", "");
			// String secSpace = String.format("%" + (22 - pack.length()) + "s", "");
			// String thirdSpace = String.format("%" + (22 - Integer.toString(cost).length()) + "s", "");

			System.out.println("----------------------------------------------------------------------");
			System.out.format("%-15s%-10s%-15s%n","|                              ","BLOSSOM WEDDINGS","                      |");
			System.out.format("%-15s%-10s%-15s%n","|  Phno : 9735673543   ","                ","           BillNo: 752        |");
			System.out.println("----------------------------------------------------------------------");
			System.out.format("%-15s%-15s%-15s%-15s%-15s%n","|  Name                ","                ",planner.Name, firstSpace,"|");
			System.out.format("%-15s%-15s%-15s%-15s%-15s%n","|  Pack                ","                ",pack, secSpace,"|");
			System.out.format("%-15s%-15s%-15s%-15s%-15s%n","|  cost                ","                ",cost, thirdSpace,"|");
			System.out.println("|                                                                    |");
			System.out.println("|              ................THANK YOU...............              |");
			System.out.println("|                                                                    |");
			System.out.println("----------------------------------------------------------------------");
			createBillFile(planner.Name, pack, cost, planner.Date);
	}
	String getPhNo(){
		Scanner inputObj = new Scanner(System.in);
		String gettingphNo = "";
		while(true){
			System.out.println("\u001B[33mEnter Phone number\u001B[0m");
			gettingphNo = inputObj.next();
			if(gettingphNo.length() == 10){
				break;
			}
			else{
				System.out.println("Enter a valid number!");
			}
		}
		return gettingphNo;

	}
	String getCardNo(){
		Scanner inputObj = new Scanner(System.in);
		String gettingNo = "";
		while(true){
			System.out.println("\u001B[33mEnter Card Number(16 digits)\u001B[0m");
			gettingNo = inputObj.next();
			if(gettingNo.length() == 16){
				break;
			}
			else{
				System.out.println("Enter a valid card number!");
			}
		}
		return gettingNo;

	}
	void getPaymentDetails(){
		Booking bookEve = new Booking();
		System.out.println("   1.Cash?                                  2.Card?  ");
		int choiceOfPayment = inputObj.nextInt();
		if(choiceOfPayment == 1){
			while(true){
				System.out.println("Enter the correct amount");
				int total = inputObj.nextInt();
				if(total == cost){
					System.out.println("\n!Thank you!");
					break;
				}
				else if(total > cost){
					System.out.println("Balance : " + (total-cost));
					break;
				}
				else{
					System.out.println("\nAmount mismatch!");
				}
			}
			

			
		}
		else if(choiceOfPayment == 2){
			String cardNo = bookEve.getCardNo();
			System.out.println("\u001B[33mEnter Expiration date\u001B[0m");
			String exp = inputObj.next();
			System.out.println("\u001B[33mEnter CVV\u001B[0m");
			int cvv = inputObj.nextInt();
			System.out.println("\u001B[33mEnter Card Holder name\u001B[0m");
			String holder = inputObj.next();
			try{
					FileWriter pay = new FileWriter(planner.fileName,true); 
					pay.write("\n" + cardNo + "\n" + exp + "\n" + cvv + "\n" + holder + "\n");
					pay.close();
			}
			catch (IOException e) {
		    	e.printStackTrace();
		        System.out.println("file not found");
			} 
			System.out.println(successMsg() + "\n\u001B[32m!Thank you!\u001B[0m");
		}
		else{
			System.out.println("Invalid");
		}
	}
	String successMsg(){
		return "\u001B[32mPayment successful!! Contact us for any queries\u001B[0m";
	}
}

class Packages{
	static ArrayList<String> bookedDates = new ArrayList<String>();
	Scanner inputObj = new Scanner(System.in);
	planner Planner;
	int count = 0;
	int selectPackages(){
		//System.out.println(bookedDates.contains(planner.Date));
		try{
			Scanner fileRead = new Scanner(new File("eventDates.txt"));
			fileRead = new Scanner(new File("eventDates.txt"));
			int index = 0;
			while(fileRead.hasNextLine()){
				String nextLn = fileRead.nextLine();
				bookedDates.add(nextLn);
	     		index++;
			}
		}
		catch(FileNotFoundException e){
			System.out.println("File does not exist");
		}
		if(!bookedDates.contains(planner.Date)){
			System.out.println("\u001B[32mAvailable!\u001B[0m");
			try{
					FileWriter dateAdd = new FileWriter("eventDates.txt",true); 
					dateAdd.write(planner.Date + "\n");
					dateAdd.close();
			}
			catch (IOException e) {
		    	e.printStackTrace();
		        System.out.println("deafknsjb");
			} 
			// System.out.println(bookedDates);
			System.out.println("\n\nTHESE ARE THE AVAILABLE PACKAGES\nPLEASE SELECT ONE!\n\n1.Elite\n2.Gold\n3.Premier\n4.Elegant\n5.Classic\n");
			int packChoice = inputObj.nextInt();
			return packChoice;
		}
		else{
			return 0;
		}
	}

	int selectPackages(int no){
		if(!bookedDates.contains(planner.Date)){
			System.out.println("\u001B[32mAvailable!\u001B[0m");
			try{
					FileWriter dateAdd = new FileWriter("eventDates.txt",true); 
					dateAdd.write(planner.Date + "\n");
					dateAdd.close();
			}
			catch (IOException e) {
		    	e.printStackTrace();
		        System.out.println("deafknsjb");
			} 
			// System.out.println(bookedDates);
			System.out.println("\n\nTHESE ARE THE AVAILABLE PACKAGES\nPLEASE SELECT ONE!\n\n1.Elite\n2.Gold\n3.Premier\n4.Elegant\n5.Classic\n");
			int packChoice = inputObj.nextInt();
			return packChoice;
		}
		else{
			return 0;
		}
	}
}

class Elite extends Packages{
        // Specify the path to your file
	String[] hairdo = null;
	String[] meal = null;
	String[] cake = null;
	String[] invitations = null;
	String[] dj = null;
	String[] chairs = null;
	String[] center = null;
	String[] photo = null;
	void getArray(){
        String filePath = "elite.txt";

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            int i=0;
            // Read lines until the end of the file
            while ((line = reader.readLine()) != null && i<8) {
                // Process each line as needed
                if(i==0){hairdo = line.split(",");}
                else if(i==1){meal = line.split(",");}
                else if(i==2){cake = line.split(",");}
                else if(i==3){invitations = line.split(",");}
                else if(i==4){dj = line.split(",");}
                else if(i==5){chairs = line.split(",");}
                else if(i==6){center = line.split(",");}
                else{photo = line.split(",");}
                i++;
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

	// String[] hairdo = {"|  High Bun", "|  Losse waves", "|  Half Up Half Down", "|  Long Wedding Ponytail", "|  Mermaid Braids", "|  Classic Updo", "|  Asymmetrical Twisted Updo", "|  Timeless Chignons"}; 
	// String[] meal = {"|  Kesari / Fruit Pudding", "|  Potato Green Peas poriyal", "|  Malabar Avial", "|  White Rice", "|  Drumstick small onion sambar", "|  Pepper Garlic Rasam", "|  Malai Poondu Vathakuzhambu", "|  Appalam"};
	// String[] cake = {"|  Grand Marnier", "|  Chocolate Chai", "|  Tropical Coconut Guava", "|  Blueberry Burst", "|  Sultry Chocolate", "|  Floral Pistachio", "|  Coffee Cream", "|  Luscious Lemon"};
	// String[] invitations = {"|  Cotton Fiber", "|  Linen Finish", "|  Vellum", "|  Glassine", "|  Board", "|  Pearlescent", "|  Thermography", "|  Engraving"};
	// String[] dj = {"|  Clean version", "|  Acapella", "|  Instrumental", "|                ", "|                ", "|                ", "|                ", "|                "};
	// String[] chairs = {"|  Peacock chair", "|  Modern velvet chair", "|  Wishbone chair", "|  Wooden benches", "|  Cane back chair", "|  Infinity chair", "|  Chiavari chair", "|  Opera chair"};
	// String[] center = {"|  Large Wedding Centerpieces", "|                ", "|                ", "|                ", "|                ", "|                ","|                ","|                "};
	// String[] photo = {"|  Camera Booth", "|  Mirror Mirror Magic Photo", "|  Photo Pros", "|  Snapshot Moments", "|  Photo Sales", "|  AZ Perfect Pix Photo Booth", "|  Lucky Photobooth", "|  Pixels Crib"};
	void selectAvailablePlansElite(){
		System.out.println("\u001B[36m---------------------------------\u001B[0m");
		System.out.println("\u001B[36m|  1.Hair and Make up             |\n\n|  2.Appetizers and meal          |\n\n|  3.Wedding cake                 |\n\n|  4.Invitations and accessories  |\n\n|  5.DJ Services                  |\n\n|  6.Chairs                       |\n\n|  7.Centerpieces                 |\n\n|  8.Photo Booth                  |\n\n|  Total                   52000  |\u001B[0m");
		System.out.println("\u001B[36m---------------------------------\u001B[0m");
	}
	void menuElite(){
		getArray();
		System.out.println("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
        System.out.println("|                                       |                                       |                                       |                                       |");
        System.out.println("|__________1.Hair and Make up___________|_________2.Appetizers and meal_________|___________3.Wedding cake______________|_____4.Invitations and accessories_____|\n");
        for (int i=0; i<8; i++){
            System.out.format("%-40s%-40s%-40s%-40s%-40s%n", hairdo[i], meal[i], cake[i], invitations[i],"|\n");
        }
        System.out.println("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
        System.out.println("|                                       |                                       |                                       |                                       |");
        System.out.println("|____________5.DJ Services______________|_______________6.Chairs________________|___________7.Centerpieces______________|_____________8.Photo Booth_____________|\n");
        for (int i=0; i<8; i++){
            System.out.format("%-40s%-40s%-40s%-40s%-40s%n", dj[i], chairs[i], center[i], photo[i], "|\n");
        }
        System.out.println("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
	}
	
}
class Gold extends Packages{
	String[] hairdo = null;
	String[] meal = null;
	String[] cake = null;
	String[] photoGrapher = null;
	String[] dj = null;
	String[] decor = null;
	String[] center = null;
	void getArray(){
        String filePath = "gold.txt";

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            int i=0;
            // Read lines until the end of the file
            while ((line = reader.readLine()) != null && i<7) {
                // Process each line as needed
                if(i==0){hairdo = line.split(",");}
                else if(i==1){meal = line.split(",");}
                else if(i==2){cake = line.split(",");}
                else if(i==3){photoGrapher = line.split(",");}
                else if(i==4){dj = line.split(",");}
                else if(i==5){decor = line.split(",");}
                else {center = line.split(",");}
                i++;
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
	// String[] hairdo = {"|  Braided updo", "|  Braided bun", "|  Twisted updo", "|  Chignon", "|  French twist", "|  French braid", "|  Crown braid", "|  Modern braided updo"}; 
	// String[] meal = {"|  Sweet Kesari / Gulab Jamun", "|  Poriyal (potato, cabbage,chenna)", "|  Kootu (Pudalai, chow chow, cabbage)", "|  White Rice", "|  Sambar", "|  Rasam", "|  Vathakuzhambu", "|  Appalam"};
	// String[] cake = {"|  Honey Lavender", "|  Salted Caramel", "|  Spiked Red Velvet", "|  Chocolate and Vanilla Swirl", "|  Campfire S'mores", "|                  ", "|              ", "|                "};
	// String[] photoGrapher = {"|  Photographer", "|", "|", "|", "|       ", "|             ", "|              ", "|           "};
	// String[] dj = {"|  Clean version", "|  Acapella", "|  Instrumental", "|                ", "|                ", "|                ", "|                ", "|                "};
	// String[] decor = {"|  Gold decor", "|", "|", "|", "|", "|                ", "|                ", "|             "};
	// String[] center = {"|  Medium Wedding Centerpieces", "|                ", "|                ", "|                ", "|                ", "|                ","|                ","|                "};
	
	void selectAvailablePlansGold(){
		getArray();
		System.out.println("\u001B[36m---------------------------------\u001B[0m");
		System.out.println("\u001B[36m|  1.Hair and Make up             |\n\n|  2.Appetizers and meal          |\n\n|  3.Wedding cake                 |\n\n|  4.Photographer                 |\n\n|  5.DJ Services                  |\n\n|  6.Reception decor              |\n\n|  7.Centerpieces                 |\n\n|  Total                   39500  |\u001B[0m");
		System.out.println("\u001B[36m---------------------------------\u001B[0m");
	}
	void menuGold(){
		System.out.println("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
        System.out.println("|                                       |                                       |                                       |                                       |");
        System.out.println("|__________1.Hair and Make up___________|_________2.Appetizers and meal_________|___________3.Wedding cake______________|_____4.Invitations and accessories_____|\n");
        for (int i=0; i<8; i++){
            System.out.format("%-40s%-40s%-40s%-40s%-40s%n", hairdo[i], meal[i], cake[i], photoGrapher[i],"|\n");
        }
        System.out.println("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
        System.out.println("|                                       |                                       |                                       |                                       |");
        System.out.println("|____________5.DJ Services______________|_______________6.Chairs________________|___________7.Centerpieces______________|_______________________________________|\n");
        for (int i=0; i<8; i++){
            System.out.format("%-40s%-40s%-40s%-40s%-40s%n", dj[i], decor[i], center[i],"|", "|\n");
        }
        System.out.println("-----------------------------------------------------------------------------------------------------------------------------------------------------------------");
	}
}
class Premier extends Packages{
	String[] hairdo = null;
	String[] meal = null;
	String[] cake = null;
	String[] invitations = null;
	String[] dj = null;
	void getArray(){
        String filePath = "premier.txt";

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            int i=0;
            // Read lines until the end of the file
            while ((line = reader.readLine()) != null && i<5) {
                // Process each line as needed
                if(i==0){hairdo = line.split(",");}
                else if(i==1){meal = line.split(",");}
                else if(i==2){cake = line.split(",");}
                else if(i==3){invitations = line.split(",");}
                else{dj = line.split(",");}
                i++;
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
	// String[] hairdo = {"|  High Bun", "|  Half Up Half Down", "|  Classic Updo",  "|  Asymmetrical Twisted Updo", "|  Timeless Chignons","|                       ", "|              ", "|             ", "|","|"}; 
	// String[] meal = {"|  Kesari / Fruit Pudding", "|  Potato Green Peas poriyal", "|  Malabar Avial", "|  White Rice", "|  Drumstick small onion sambar", "|  Pepper Garlic Rasam", "|  Malai Poondu Vathakuzhambu", "|  Appalam"};
	// String[] cake = {"|  Grand Marnier", "|  Chocolate Chai", "|  Tropical Coconut Guava", "|  Blueberry Burst", "|", "|", "|", "|"};
	// String[] invitations = {"|  Cotton Fiber", "|  Linen Finish", "|  Board", "|  Pearlescent","|","|","|","|"};
	// String[] dj = {"|  Clean version", "|  Acapella", "|  Instrumental", "|                ", "|                ", "|                ", "|                ", "|                "};
	void selectAvailablePlansPremier(){
		System.out.println("\u001B[36m---------------------------------\u001B[0m");
		System.out.println("\u001B[36m|  1.Hair and Make up             |\u001B[0m\n");
		System.out.println("\u001B[36m|  2.Appetizers and meal          |\u001B[0m\n");
		System.out.println("\u001B[36m|  3.Invitations                  |\u001B[0m\n");
		System.out.println("\u001B[36m|  4.DJ Services                  |\u001B[0m\n");
		System.out.println("\u001B[36m|  5.Wedding Cake                 |\u001B[0m\n");
		System.out.println("\u001B[36m|  Total                     24000|\u001B[0m\n");
		System.out.println("\u001B[36m---------------------------------\u001B[0m");
	}
	void menuPremier(){
		getArray();
		System.out.println("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
        System.out.println("|                                  |                                  |                                  |                                  |                                  |");
        System.out.println("|________1.Hair and Make up________|_______2.Appetizers and meal______|_________3.Invitations____________|___________4.DJ Services__________|___________5.Wedding Cake_________|\n");
        for (int i=0; i<8; i++){
            System.out.format("%-35s%-35s%-35s%-35s%-35s%-35s%n", hairdo[i], meal[i], invitations[i], dj[i], cake[i], "|\n");
        }
        System.out.println("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
        
	}
}
class Elegant extends Packages{
	String[] hairdo = null;
	String[] photoGrapher = null;
	String[] meal = null;
	String[] decor = null;
	void getArray(){
        String filePath = "elegant.txt";

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            int i=0;
            // Read lines until the end of the file
            while ((line = reader.readLine()) != null && i<4) {
                // Process each line as needed
                if(i==0){hairdo = line.split(",");}
                else if(i==1){photoGrapher = line.split(",");}
                else if(i==2){meal = line.split(",");}
                else{decor = line.split(",");}
                i++;
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
	// String[] hairdo = {"|  Braided updo", "|  Braided bun", "|  Twisted updo", "|  Chignon", "|  French twist", "|  French braid", "|  Crown braid", "|  Modern braided updo"}; 
	// String[] photoGrapher = {"|  Photographer", "|", "|", "|", "|       ", "|             ", "|              ", "|           "};
	// String[] meal = {"|  Sweet Kesari / Gulab Jamun", "|  Poriyal (potato, cabbage)", "|  Kootu (chow chow, cabbage)", "|  White Rice", "|  Sambar", "|  Rasam", "|  Vathakuzhambu", "|  Appalam"};
	// String[] decor = {"|  Elegant decor", "|                ", "|                ", "|                ", "|                ", "|                ","|                ","|                "};
	void selectAvailablePlansElegant(){
		System.out.println("\u001B[36m---------------------------------\u001B[0m");
		System.out.println("\u001B[36m|  1.Hair and Make up             |\u001B[0m\n");
		System.out.println("\u001B[36m|  2.Photographer                 |\u001B[0m\n");
		System.out.println("\u001B[36m|  3.Appetizers and meal          |\u001B[0m\n");
		System.out.println("\u001B[36m|  4.Decorations                  |\u001B[0m\n");
		System.out.println("\u001B[36m|  Total                     20000|\u001B[0m\n");
		System.out.println("\u001B[36m---------------------------------\u001B[0m");
	}
	void menuElegant(){
		getArray();
		System.out.println("---------------------------------------------------------------------------------------------------------------------------------------------");
        System.out.println("|                                  |                                  |                                  |                                  |");
        System.out.println("|________1.Hair and Make up________|___________2.Photographer_________|______3.Appetizers and meal_______|___________4.Decorations__________|\n");
        for (int i=0; i<8; i++){
            System.out.format("%-35s%-35s%-35s%-35s%-35s%n", hairdo[i], photoGrapher[i], meal[i], decor[i], "|\n");
        }
        System.out.println("----------------------------------------------------------------------------------------------------------------------------------------------");
	}
}
class Classic extends Packages{
	String[] hairdo = null;
	String[] meal = null;
	void getArray(){
        String filePath = "classic.txt";

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            int i=0;
            // Read lines until the end of the file
            while ((line = reader.readLine()) != null && i<4) {
                // Process each line as needed
                if(i==0){hairdo = line.split(",");}
                else{meal = line.split(",");}
                i++;
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
	// String[] hairdo = {"|  High Bun", "|  Losse waves", "|  Half Up Half Down", "|  Long Wedding Ponytail", "|  Mermaid Braids", "|  Classic Updo", "|  Asymmetrical Twisted Updo", "|  Timeless Chignons"}; 
	// String[] meal = {"|  Kesari / Fruit Pudding", "|  Potato Green Peas poriyal", "|  Malabar Avial", "|  White Rice", "|  Drumstick small onion sambar", "|  Pepper Garlic Rasam", "|  Malai Poondu Vathakuzhambu", "|  Appalam"};
	void selectAvailablePlansClassic(){
		System.out.println("\u001B[36m---------------------------------\u001B[0m");
		System.out.println("\u001B[36m|  1.Hair and Make up             |\u001B[0m\n");
		System.out.println("\u001B[36m|  2.Appetizers and meal          |\u001B[0m\n");
		System.out.println("\u001B[36m|  Total                     16500|\u001B[0m\n");
		System.out.println("\u001B[36m---------------------------------\u001B[0m");
	}
	void menuClassic(){
		getArray();
		System.out.println("-----------------------------------------------------------------------------------------------------");
        System.out.println("|                                                 |                                                 |");
        System.out.println("|________________1.Hair and Make up_______________|______________2.Appetizers and meal______________|\n");
        for (int i=0; i<8; i++){
            System.out.format("%-50s%-50s%-50s%n", hairdo[i], meal[i], "|\n");
        }
        System.out.println("-----------------------------------------------------------------------------------------------------");
	}
}