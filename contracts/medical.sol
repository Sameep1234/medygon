pragma solidity ^0.8.13;

contract medical {
    struct patient {
        string name;
        uint256 age;
        address[] myDoctors;
        uint256[] reportNumber;
        string reports;
    }

    struct doctor {
        string name;
        uint256 age;
        address[] myPatients;
    }

    // uint creditPool;
    address[] public patientList;
    address[] public doctorList;

    mapping(address => patient) patientInfo;
    mapping(address => doctor) doctorInfo;
    mapping(address => address) Empty;
    mapping(address => string) patientRecords;

    function add_agent(
        string memory _name,
        uint256 _age,
        uint256 _designation,
        string memory _hash
    ) public returns (string memory) {
        address addr = msg.sender;

        if (_designation == 0) {
            patient memory p;
            p.name = _name;
            p.age = _age;
            p.reports = _hash;
            patientInfo[msg.sender] = p;
            patientList.push(addr);
            return _name;
        } else if (_designation == 1) {
            doctorInfo[addr].name = _name;
            doctorInfo[addr].age = _age;
            doctorList.push(addr);
            return _name;
        } else {
            revert();
        }
    }

    function get_patient(address addr)
        public
        view
        returns (
            string memory,
            uint256,
            uint256[] memory,
            address,
            string memory
        )
    {
        return (
            patientInfo[addr].name,
            patientInfo[addr].age,
            patientInfo[addr].reportNumber,
            Empty[addr],
            patientInfo[addr].reports
        );
    }

    function get_doctor(address addr)
        public
        view
        returns (string memory, uint256)
    {
        return (doctorInfo[addr].name, doctorInfo[addr].age);
    }

    function permit_access(address addr) public payable {
        doctorInfo[addr].myPatients.push(msg.sender);
        // uint256 patientAccessNumber = doctorInfo[addr].myPatients.length - 1;
        patientInfo[msg.sender].myDoctors.push(addr);
        // uint256 doctorAccessNumber = patientInfo[addr].myDoctors.length - 1;
    }

    function remove_element_in_array(address[] storage Array, address addr) internal
    {
        bool check = false;
        uint256 del_index = 0;
        for (uint256 i = 0; i < Array.length; i++) {
            if (Array[i] == addr) {
                check = true;
                del_index = i;
            }
        }
        uint256 len = Array.length;
        if (!check) revert();
        else {
            if (Array.length == 1) {
                delete Array[del_index];
            } else {
                Array[del_index] = Array[len - 1];
                delete Array[len - 1];
            }
            len--;
        }
    }

    function remove_patient(address paddr, address daddr) public {
        remove_element_in_array(doctorInfo[daddr].myPatients, paddr);
        remove_element_in_array(patientInfo[paddr].myDoctors, daddr);
    }

    function get_accessed_doctorlist_for_patient(address addr)
        public
        view
        returns (address[] memory)
    {
        address[] storage doctoraddr = patientInfo[addr].myDoctors;
        return doctoraddr;
    }

    function get_accessed_patientlist_for_doctor(address addr)
        public
        view
        returns (address[] memory)
    {
        return doctorInfo[addr].myPatients;
    }

    function revoke_access(address daddr) public payable {
        remove_patient(msg.sender, daddr);
    }

    function get_patient_list() public view returns (address[] memory) {
        return patientList;
    }

    function get_doctor_list() public view returns (address[] memory) {
        return doctorList;
    }

    function get_hash(address paddr) public view returns (string memory) {
        return patientInfo[paddr].reports;
    }

    function set_hash(address paddr, string memory _hash) internal {
        patientInfo[paddr].reports = _hash;
    }
}
