write("The contents of " + getCurrentFolder()); 

fileName = findFirstFile("*.*"); // Find the first file matching the filter 
while(fileName.length) 
{ 
    write(fileName); 
    fileName = findNextFile();  // Find the next file matching the filter 
}
